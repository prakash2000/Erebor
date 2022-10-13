import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Erebor Wealth App';
  public showPopup = false;
  public addItem(){
    this.showPopup = true;
  }
}
