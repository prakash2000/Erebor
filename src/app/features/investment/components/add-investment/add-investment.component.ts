import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  @Input() showPopup = false;
  public count = 0;

  constructor() { }

  ngOnInit(): void {    
    this.count++;
    console.log(this.count);
  }

  increaseCount(){
    this.count++;
    console.log(this.count);
  }



}
