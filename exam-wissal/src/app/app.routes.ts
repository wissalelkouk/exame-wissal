import { Routes } from '@angular/router';
import { PostList } from './post-list/post-list';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'posts', component: PostList },
  { path: 'login', component: Login },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
];
