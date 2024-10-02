import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SpinnerModule, ToastModule],
  exports: [SpinnerModule, ToastModule],
})
export class SharedModule {}
