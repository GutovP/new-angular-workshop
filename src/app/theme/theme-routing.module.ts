import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: 'current-theme', component: CurrentThemeComponent },
  { path: 'new-theme', component: NewThemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
