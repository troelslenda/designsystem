import { Component } from '@angular/core';

const config = {
  selector: 'cookbook-chart-example-doughnut',
  template: `
  <kirby-chart 
    type="doughnut" 
    [data]="[45, 25, 30]"
    [dataLabels]="['2021', '2020', '2019']"
  ></kirby-chart>`,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartExampleDoughnutComponent {
  template: string = config.template;
}
