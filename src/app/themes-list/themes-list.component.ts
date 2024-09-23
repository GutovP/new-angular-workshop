import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent implements OnInit{

  constructor(private apiService : ApiService) {

  }
  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      console.log(themes)
    })
  }

}
