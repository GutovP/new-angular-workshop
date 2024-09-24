import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Post } from '../core/models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {

  posts: Post[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
