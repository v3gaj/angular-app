import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketTotalComponent } from './_shared/_components/market-total/market-total.component';
import { TradeTypeTotalComponent } from './_shared/_components/trade-type-total/trade-type-total.component';

const routes: Routes = [
  { path: 'market-total', component: MarketTotalComponent },
  { path: 'trade-type', component: TradeTypeTotalComponent },
  { path: '',   redirectTo: '/market-total', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
