import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Theme } from './core/models/theme';

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
    return this.http.get<any>(`${api}/posts`)
  }
}
