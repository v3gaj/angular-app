import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Colors, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {

  @Input() set chartLabels(value: Label[]) {
    this.barChartLabels = value;
  }

  @Input() set chartData(value: ChartDataSets[]) {
    this.barChartData = value;
  }

  @Input() set chartColors(value: Colors[]) {
    this.barChartColors = value;
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: false
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Colors[] = [];

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
