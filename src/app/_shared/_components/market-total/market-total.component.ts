import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChartDataSets } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import * as fromMarket from '../../_reducers/index'

@Component({
  selector: 'app-market-total',
  templateUrl: './market-total.component.html',
  styleUrls: ['./market-total.component.sass']
})
export class MarketTotalComponent implements OnInit {

  public totalChartLabels: Label[] = [];
  public bidTotalChartData: ChartDataSets[] = [
    { data: [], label: 'Total Bid' }
  ];

  public quatityTotalChartData: ChartDataSets[] = [
    { data: [], label: 'Total Quantity' }
  ];

  public tradeTotalTransactionChartData: SingleDataSet = [];

  // public transactionTotalChartData: ChartDataSets[] = [
  //   { data: [], label: 'Total Transactions' }
  // ];

  public bidTotalColors: Color[] = [
    { backgroundColor: '#8cc8f4' },
  ]

  public quatityTotalColors: Color[] = [
    { backgroundColor: '#ffe29e' },
  ]

  // public transactionTotalColors: Color[] = [
  //   { backgroundColor: '#ffa3b5' },
  // ]

  constructor(private store: Store<fromMarket.State>) {
    store.pipe(select(fromMarket.getMarketTotal)).subscribe(res => {
      this.bidTotalChartData[0].data = [];
      this.quatityTotalChartData[0].data = [];
      this.tradeTotalTransactionChartData = [];
      // this.transactionTotalChartData[0].data = [];

      res.forEach(total => {
        if(!this.totalChartLabels.includes(total.symbol!)) {
          this.totalChartLabels.push(total.symbol!);
        }

        this.bidTotalChartData[0].data!.push(total.bidTotal!);

        this.quatityTotalChartData[0].data!.push(total.orderTotal!);

        this.tradeTotalTransactionChartData.push(total.totalTransactions!);
        
        // this.transactionTotalChartData[0].data!.push(total.totalTransactions!);
      });
    })
  }

  ngOnInit() {
  }

}
