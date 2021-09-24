import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartExampleDoughnutComponent } from '~/app/examples/chart-example/examples/chart-example-doughnut.component';

import { KirbyModule } from '@kirbydesign/designsystem';

import { ChartExampleComponent } from './chart-example.component';
import { ChartExampleAccessibilityComponent } from './examples/chart-example-accessibility.component';
import { ChartExampleAnnotationsComponent } from './examples/chart-example-annotations.component';
import { ChartExampleBarComponent } from './examples/chart-example-bar.component';
import { ChartExampleColumnComponent } from './examples/chart-example-column-chart.component';
import { ChartExampleColumnStackedComponent } from './examples/chart-example-column-stacked.component';
import { ChartExampleInteractionComponent } from './examples/chart-example-interaction.component';
import { ChartExampleLineComponent } from './examples/chart-example-line.component';
import { ChartExampleMultipleDatasetsComponent } from './examples/chart-example-multiple-datasets.component';
import { ChartExampleSimpleColumnComponent } from './examples/chart-example-simple-column-chart.component';

const COMPONENT_DECLARATIONS = [
  ChartExampleComponent,
  ChartExampleSimpleColumnComponent,
  ChartExampleColumnComponent,
  ChartExampleBarComponent,
  ChartExampleInteractionComponent,
  ChartExampleColumnStackedComponent,
  ChartExampleMultipleDatasetsComponent,
  ChartExampleAccessibilityComponent,
  ChartExampleAnnotationsComponent,
  ChartExampleLineComponent,
  ChartExampleDoughnutComponent,
];

@NgModule({
  declarations: COMPONENT_DECLARATIONS,
  imports: [CommonModule, KirbyModule],
  exports: COMPONENT_DECLARATIONS,
})
export class ChartExampleModule {}
