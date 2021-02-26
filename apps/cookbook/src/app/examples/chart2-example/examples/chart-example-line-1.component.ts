import { Component, Input, Output } from '@angular/core';
import { ChartConfiguration, ChartDataSets } from 'chart.js';

const config = {
  selector: 'cookbook-chart-example-line-1',
  template: `<kirby-card>
  <kirby-card-header title="Areaspline"></kirby-card-header>
  <kirby-chart-2 
    type="line"
    label="Areaspline"
    [labels]="labels"
    [height]="height"
    [dataset]="dataset"   
    [backgroundColor]="color"
    >
  </kirby-chart-2>
  <kirby-card-footer>
      <!-- example period selector -->
      <div style="cursor: pointer">
      <span (click)="data = [200, 100, 300, 100, 200, 300, 200]">Jan </span>
      <span (click)="data = [100, 100, 100, 400, 200, 200, 200]">Feb </span>
      <span (click)="data = [500, 400, 300, 200, 100, 200, 300]">Mar </span>
    </div>
  </kirby-card-footer>
</kirby-card>`,

  codeSnippet: ``,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartExampleLine1Component {
  template: string = config.template;
  codeSnippet: string = config.codeSnippet;

  height = 250;

  color: string[] = ['red'];
  @Input()
  lineOptions: ChartConfiguration = {
    options: {
      elements: {
        line: {
          fill: false,
        },
        point: {
          radius: 5,
          hoverRadius: 8,
          hoverBorderWidth: 1,
        },
      },
    },
  };
  // https://www.chartjs.org/docs/latest/axes/cartesian/category.html#category-cartesian-axis
  dataset: ChartDataSets = {
    label: 'the label',
    data: [
      1600.9,
      1710.5,
      1060.4,
      1290.2,
      1440.0,
      1460.0,
      1350.6,
      1480.5,
      1800.4,
      1940.1,
      1950.6,
      1700.4,
      1600.9,
      1710.5,
      1060.4,
      1290.2,
      1440.0,
      1460.0,
      1350.6,
      1480.5,
      1800.4,
      1940.1,
      1950.6,
      1700.4,
    ],
  };

  labels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
}
