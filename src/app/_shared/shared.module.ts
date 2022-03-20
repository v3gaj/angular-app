import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './_reducers/index';
import { MarketTotalComponent } from './_components/market-total/market-total.component';
import { TradeTypeTotalComponent } from './_components/trade-type-total/trade-type-total.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './_components/bar-chart/bar-chart.component';
import { HeaderComponent } from './_components/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { PieChartComponent } from './_components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    MarketTotalComponent,
    TradeTypeTotalComponent,
    BarChartComponent,
    HeaderComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartsModule,
    StoreModule.forFeature('shared', reducers),
    EffectsModule.forFeature([]),
  ],
  exports: [
    MarketTotalComponent,
    TradeTypeTotalComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
