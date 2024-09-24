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
    this.apiService.getThemes().subscribe((themes) => {
      console.log(themes)
      this.themes = themes;
    })
  }

}
