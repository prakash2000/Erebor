import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'app-balance-card',
    templateUrl: './balance-card.component.html',
    styleUrls: ['./balance-card.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class BalanceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any){
    console.log(event)
  }

}
