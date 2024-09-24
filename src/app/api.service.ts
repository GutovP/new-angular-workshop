import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';
import { Theme } from './core/models/theme';
import { Post } from './core/models/post';

const api = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    return this.http.get<Theme[]>(`${api}/themes`);
  }
  getPosts(limit?: number) {
    let url = `${api}/posts`;

    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }
}
