import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-balance-card',
    templateUrl: './balance-card.component.html',
    styleUrls: ['./balance-card.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class BalanceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any){
    console.log(event)
  }

}
