import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
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
