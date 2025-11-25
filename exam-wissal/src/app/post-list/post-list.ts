import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostItem } from '../services/post';
import { PostItem as PostItemComponent } from '../post-item/post-item';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, PostItemComponent],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
  posts: PostItem[] = [];

  constructor(private postService: Post) {
    this.postService.getPostsFromApi().subscribe((data) => {
      this.posts = data;
    });
  }
}
