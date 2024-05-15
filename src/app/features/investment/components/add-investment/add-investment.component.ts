import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../../../../shared/services/common.service';
import { InvestmentModel  } from '../../investment.model'

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  //public showPopup: boolean = false;
  public count = 0;
  public categories = ['Equity', 'Chit', 'MutualFund', 'Debt Fund', 'SGB', 'Gold', 'FD', 'Other'];
  public submitted = false;
  public investment = new InvestmentModel('', '', 0, '');
  public recentInvestments: any[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.count++;
    console.log(this.count);
    this.recentInvestments.push({category: "Pk Equity", date: '05-05-24', amount:8000, title:'Equity Purchase'});
    this.recentInvestments.push({category: "Pk Equity", date: '15-05-24', amount:6000, title:'Equity Purchase'});
    this.recentInvestments.push({category: "Pk Coin", date: '15-05-24', amount:5000, title:'MF Purchase'});
    // this.commonService.showPopup.subscribe(value => {
    //   this.showPopup = value;
    // });

  }
  
  addInvestment() {
    this.submitted = true;
    console.log("Investment added successfully");
    console.log(this.investment.title);
    this.recentInvestments.push(this.investment);
  }

  updateInvestment() {
    this.submitted = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  
  increaseCount(){
    this.count++;
    console.log(this.count);
  }
  
}