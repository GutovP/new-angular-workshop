import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'themes',
    loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
  },
  {
    path: 'users', component: UserListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
