import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/app/core/models/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.globalLoaderService.showSpinner();

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.globalLoaderService.hideSpinner();
      },
      error: (err) => {
        console.log(err);
      },
    });

    
  }
}
