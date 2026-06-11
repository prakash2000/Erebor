import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BalanceCardComponent } from '../../components/balance-card/balance-card.component';
import { AssetsCardComponent } from '../../components/assets-card/assets-card.component';
import { NetworthCardComponent } from '../../components/networth-card/networth-card.component';
import { LoanCardComponent } from '../../components/loan-card/loan-card.component';
import { AddInvestmentComponent } from '../../../investment/components/add-investment/add-investment.component';

@Component({
    selector: 'app-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [BalanceCardComponent, AssetsCardComponent, NetworthCardComponent, LoanCardComponent, AddInvestmentComponent]
})
export class DashboardViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
