import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BalanceCardComponent } from './features/dashboard/components/balance-card/balance-card.component';
import { DashboardViewComponent } from './features/dashboard/pages/dashboard-view/dashboard-view.component';
import { AssetsCardComponent } from './features/dashboard/components/assets-card/assets-card.component';
import { NetworthCardComponent } from './features/dashboard/components/networth-card/networth-card.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
import { AddInvestmentComponent } from './features/investment/components/add-investment/add-investment.component';
import { LoanCardComponent } from './features/dashboard/components/loan-card/loan-card.component';
import { PopupComponent } from './shared/components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    DashboardViewComponent,
    AssetsCardComponent,
    NetworthCardComponent,
    AddInvestmentComponent,
    LoanCardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    ErrorPageComponent,
    
  ],
  exports: [ErrorPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
