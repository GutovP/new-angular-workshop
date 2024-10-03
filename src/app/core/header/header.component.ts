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
  authItems: HeaderItems[] = [];

  ngOnInit(): void {
    this.headerItems = [
      { caption: 'Home', link: [''] },
      { caption: 'Themes', link: ['/themes'] },
      { caption: 'New Theme', link: ['/themes/new-theme'] },
    ];

    this.authItems = [
      { caption: 'Login', link: ['/auth/login'] },
      { caption: 'Register', link: ['/auth/register'] },
    ];
  }
}
