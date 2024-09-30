import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  isHidden: boolean = true;
  
  showSpinner() {
    this.isHidden = false;
  }

  hideSpinner() {
    this.isHidden = true;
  }
}
