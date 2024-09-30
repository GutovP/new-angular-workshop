import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Theme } from '../core/models/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent implements OnInit{

  themes: Theme[] = [];
  constructor(private apiService : ApiService) {

  }
  ngOnInit(): void {
    this.fetchThemes();
  }

  fetchThemes() {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
