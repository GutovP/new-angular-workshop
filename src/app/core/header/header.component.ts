import { Component, OnInit } from '@angular/core';

import { HeaderItems } from './header-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  headerItems: HeaderItems[] = [];

  ngOnInit(): void {
    this.headerItems = [
      { caption: 'Home ', path: 'home', link: [''] },
      { caption: 'Themes ', path: 'themes', link: ['/themes'] },
      { caption: 'New Theme', path: '', link: ['/add-theme'] },
    ];
  }
}
