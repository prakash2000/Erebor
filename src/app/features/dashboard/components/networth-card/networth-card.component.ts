import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-networth-card',
  templateUrl: './networth-card.component.html',
  styleUrls: ['./networth-card.component.scss']
})
export class NetworthCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public doughnutChartLabels: string[] = [ 'Assets', 'Liability' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 1500000, 600000 ], 
        backgroundColor: ['#4762E6', '#4cbbf2'],
        //hoverOffset: 4        
      }      
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  // public pieChartLegend:  
  public chartOptions:  ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  }

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
