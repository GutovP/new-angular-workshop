import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { UserListComponent } from '../user/user-list/user-list.component';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent,
    MainComponent,
    ThemesListComponent,
    PostsListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
