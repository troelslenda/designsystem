import { Component } from '@angular/core';

const config = {
  selector: 'cookbook-chart-example-donut',
  template: `<kirby-card>
    <kirby-chart
      [height]="5520"
      type="donut"
      [showDataLabels]="true"
      description="Accessibility description goes here"
      [data]="[
      {
        name: 'Boomerangs 25%',
        y: 25,
        label: '25%'
      },
      {
        name: 'Bubbles 41%',
        y: 41,
        label: '41%'
      },
      {
        name: 'Jumping 33%',
        y: 33,
        label: '33%'
      },
      {
        name: 'Christmas < 1%',
        y: 1,
        label: '< 1%'
      }
      ]"
    >
    </kirby-chart>
</kirby-card>`,
};
@Component({
  selector: config.selector,
  template: config.template,
})
export class ChartExampleDonutComponent {
  template = config.template;
}
