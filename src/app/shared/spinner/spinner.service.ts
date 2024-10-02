import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  isHidden: boolean = true;
  
  showSpinner() {
    this.isHidden = false;
  }

  hideSpinner() {
    this.isHidden = true;
  }
}
