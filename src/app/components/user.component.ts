import {Component} from '@angular/core';
import {PostService} from '../services/post.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './posts.html',
  providers: [PostService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: any;
  constructor(private postService : PostService){
    this.name = "Arthur";
    this.email = "ar-arturo@hotmail.com";
    this.address = {
      street: "wolf street 24",
      city: "New York",
      state: "New York",
    };
    this.hobbies = ['Music','Movies','Ping Pong','Table Soccer'];
    this.showHobbies = false;

    postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(){
      this.showHobbies = !this.showHobbies;
  }
  addHobby(hobby : string) {
    this.hobbies.push(hobby)
  }
}

interface address{
  street: string;
  city: string;
  state: string;
}
