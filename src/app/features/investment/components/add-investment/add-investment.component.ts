import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  @Input() showPopup: any;
  public count = 0;

  constructor() { }

  ngOnInit(): void {
    this.count++;
    console.log(this.count);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  increaseCount(){
    this.count++;
    console.log(this.count);
  }

  closePopup(){
    this.showPopup = false;
  }
}
