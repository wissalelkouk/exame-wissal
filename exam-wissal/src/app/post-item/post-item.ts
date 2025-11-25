import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItem as PostItemModel } from '../services/post';

@Component({
  selector: 'app-post-item',
  imports: [CommonModule],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItem {
  @Input() post!: PostItemModel;
}
