import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AdminComponent} from './components/admin.component';

const appRoutes: Routes = [
  {
    path:'',
    component: UserComponent
  },
  {
    path: 'post/:id',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
