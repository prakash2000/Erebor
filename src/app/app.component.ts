import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from './shared/services/common.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Erebor Wealth App';
  //@Output showPopup = new EventEmitter<boolean>();
  public showAddItem = false;
  
  constructor(private commonService: CommonService) { }

  public showPopup(){
    this.commonService.openPopup(true);
    console.log(this.showAddItem);
  }
}
