import { Component } from '@angular/core';
import { MarketService } from './_shared/_services/market.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'encora-app';

  constructor(private marketService: MarketService) {
    this.marketService.initiateDataListener();
  }
}
