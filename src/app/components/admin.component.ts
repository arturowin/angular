import {Component} from '@angular/core';
import {PostService} from '../services/post.service'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './posts.html',
  providers: [PostService]
})
export class AdminComponent {
  posts: any;

  constructor(private postService : PostService ,private route: ActivatedRoute,
              private router: Router)
  {
    console.log(this.route.params);
    postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
