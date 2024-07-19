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
  public accounts = ['PK Equity', 'Kadri Chit', 'SKL Chit', 'Sow Equity', 'PK Coin', 'Sow FD'];
  public submitted = false;
  public investment = new InvestmentModel('', '', '', 0, '');
  public recentInvestments: any[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.count++;
    console.log(this.count);
    this.recentInvestments.push({category: "Equity", date: '05-05-24', amount:8000, note:'Equity Purchase'});
    this.recentInvestments.push({category: "Equity", date: '15-05-24', amount:6000, note:'Equity Purchase'});
    this.recentInvestments.push({category: "Coin", date: '15-05-24', amount:5000, note:'MF Purchase'});
    this.recentInvestments.push({category: "Coin", date: '25-05-24', amount:7000, note:'MF Purchase'});
    this.recentInvestments.push({category: "NPS", date: '25-05-24', amount:4000, note:'NPS Invest'});
    // this.commonService.showPopup.subscribe(value => {
    //   this.showPopup = value;
    // });

  }
  
  addInvestment() {
    this.submitted = true;
    console.log("Investment added successfully");
    console.log(this.investment.note);
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