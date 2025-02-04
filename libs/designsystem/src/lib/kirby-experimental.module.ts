import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLocalNavigationComponent } from './components';
import { KirbyModule } from './kirby.module';

const COMPONENT_DECLARATIONS = [PageLocalNavigationComponent];
export { StockChartConfig, BarChartConfig } from './components/charts/chart-config';

/**
 * This module contains experimental components, that should not be used in a production environment.
 * @see KirbyModule
 */
@NgModule({
  imports: [CommonModule, KirbyModule, PageLocalNavigationComponent],
  exports: COMPONENT_DECLARATIONS,
})
export class KirbyExperimentalModule {}
