import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChartDataSets } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import * as fromMarket from '../../_reducers/index'

@Component({
  selector: 'app-trade-type-total',
  templateUrl: './trade-type-total.component.html',
  styleUrls: ['./trade-type-total.component.sass']
})
export class TradeTypeTotalComponent implements OnInit {

  public tradeChartLabels: Label[] = [];

  public bidTotalChartData: ChartDataSets[] = [
    { data: [], label: 'Total Bid' }
  ];

  public quatityTotalChartData: ChartDataSets[] = [
    { data: [], label: 'Total Quantity' }
  ];
  
  public tradeTotalTransactionChartData: SingleDataSet = [];

  public bidTotalColors: Color[] = [
    { backgroundColor: '#ffa3b5' },
  ]

  public quatityTotalColors: Color[] = [
    { backgroundColor: '#99dad9' },
  ]

  constructor(private store: Store<fromMarket.State>) {
    store.pipe(select(fromMarket.getTradeTypeTotal)).subscribe(res => {
      this.bidTotalChartData[0].data = [];
      this.quatityTotalChartData[0].data = [];
      this.tradeTotalTransactionChartData = [];

      res.forEach(total => {
        if(!this.tradeChartLabels.includes(total.tradeType!)) {
          this.tradeChartLabels.push(total.tradeType!);
        }
        
        this.bidTotalChartData[0].data!.push(total.bidTradeTotal!);

        this.quatityTotalChartData[0].data!.push(total.tradelTotal!);
        
        this.tradeTotalTransactionChartData.push(total.totalTransactions!);
      });
    })
  }

  ngOnInit(): void {
  }

}
