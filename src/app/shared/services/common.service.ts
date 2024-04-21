import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private popupState = new BehaviorSubject<any>(false);
  showPopup = this.popupState.asObservable();

  constructor() { }

  openPopup(state: any){
    this.popupState.next(state);
  }

  // saveInvestment(){
    
  // }

  // public openPopup(){
  //   const showPopup = new Observable((observer) => {
  //     observer.next(true);
  //   });
  //   return showPopup;
  // }
}
