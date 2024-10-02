import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Post } from '../core/models/post';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  isLoading: boolean = true;
  posts: Post[] = [];
  constructor(private apiService: ApiService, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
this.spinnerService.showSpinner();

    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.spinnerService.hideSpinner();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
