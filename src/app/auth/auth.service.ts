import { Injectable } from '@angular/core';

import { AuthUser } from '../core/models/auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: AuthUser | undefined;
  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    /* !! cast to boolean. If null or undefined retuns false. If object or array returns true */
    
    return !!this.user;
  }

  constructor() {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    this.user = JSON.parse(localStorageUser);
  }
  login() {
    this.user = {
      username: 'Petko',
      email: 'blabla@gmail.com',

      phoneNumber: '123456',
      password: 'password',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
