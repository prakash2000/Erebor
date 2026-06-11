import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-assets-card',
    templateUrl: './assets-card.component.html',
    styleUrls: ['./assets-card.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class AssetsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(1);
  }

}
