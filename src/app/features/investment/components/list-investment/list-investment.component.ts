import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-list-investment',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>list-investment works!</p>`,
  styleUrl: './list-investment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInvestmentComponent implements OnInit {

  ngOnInit(): void { }

}
