import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { Theme } from '../../core/models/theme';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  constructor(
    private apiService: ApiService,
    private spinnerService: SpinnerService
  ) {}
  ngOnInit(): void {
    this.fetchThemes();
  }

  fetchThemes() {
    this.spinnerService.showSpinner();

    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
        this.spinnerService.hideSpinner();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
