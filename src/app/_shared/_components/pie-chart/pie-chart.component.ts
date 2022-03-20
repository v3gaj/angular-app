import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {

  @Input() set chartLabels(value: Label[]) {
    this.pieChartLabels = value;
  }

  @Input() set chartData(value: SingleDataSet) {
    this.pieChartData = value;
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: false
    },
    plugins: {
      labels: {
        render: 'percentage',
        precision: 2
      }
    },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    
  }

}
