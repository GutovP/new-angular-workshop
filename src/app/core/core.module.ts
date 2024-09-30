import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, GlobalLoaderComponent],
  imports: [CommonModule, RouterModule, SpinnerModule],
  exports: [HeaderComponent, FooterComponent, GlobalLoaderComponent],
})
export class CoreModule {}
