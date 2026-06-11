import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-loan-card',
    templateUrl: './loan-card.component.html',
    styleUrls: ['./loan-card.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class LoanCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
