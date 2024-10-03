import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from 'src/app/core/models/user';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) {}
  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.spinnerService.showSpinner();

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.spinnerService.hideSpinner();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
