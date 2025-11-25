import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PostItem {
  id: string;
  titre: string;
  contenu: string;
}

@Injectable({
  providedIn: 'root',
})
export class Post {
  private postList: PostItem[] = [
    { id: '1', titre: 'Premier post', contenu: 'détails premier post' },
    { id: '2', titre: 'Deuxième post', contenu: 'détails deuxième post' },
    { id: '3', titre: 'Troisième post', contenu: 'détails troisième post' },
  ];

  constructor(private http: HttpClient) {}

  getPosts(): PostItem[] {
    return [...this.postList];
  }

  addPost(post: PostItem): void {
    this.postList.push(post);
  }

  updatePost(id: string, changes: Partial<PostItem>): void {
    const index = this.postList.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.postList[index] = { ...this.postList[index], ...changes };
    }
  }

  deletePost(id: string): void {
    this.postList = this.postList.filter((p) => p.id !== id);
  }

  getPostsFromApi(): Observable<PostItem[]> {
    return this.http.get<PostItem[]>('http://localhost:3000/postList');
  }
}
