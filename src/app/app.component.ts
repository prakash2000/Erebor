import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './shared/services/common.service'
import { PopupComponent } from './shared/components/popup/popup.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [CommonModule, FormsModule, RouterOutlet, PopupComponent]
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
