import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  //public showPopup: boolean = false;
  public count = 0;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.count++;
    console.log(this.count);
    // this.commonService.showPopup.subscribe(value => {
    //   this.showPopup = value;
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  increaseCount(){
    this.count++;
    console.log(this.count);
  }

  addInvestment(){
    console.log("Save Investment")
  }
  
}
