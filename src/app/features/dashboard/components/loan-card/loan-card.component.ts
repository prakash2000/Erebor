import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loan-card',
    templateUrl: './loan-card.component.html',
    styleUrls: ['./loan-card.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class LoanCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
