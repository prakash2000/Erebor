import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CommonService } from '../../services/common.service'

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
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
