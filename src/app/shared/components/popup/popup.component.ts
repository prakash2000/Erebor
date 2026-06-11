import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service'

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class PopupComponent implements OnInit {

  @Input() showPopup = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  public closePopup(){
    this.commonService.openPopup(false);
  }

}
