import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  @Input() showPopup = false;
  
  constructor() { }

  ngOnInit(): void {

  }

}
