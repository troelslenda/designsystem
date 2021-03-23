import { Component } from '@angular/core';

import { ActionSheetItem } from '@kirbydesign/designsystem';

const config = {
  selector: 'cookbook-action-sheet-example-custom-button',
  template: `<kirby-action-sheet 
  header="Your action sheet header" 
  subHeader="Your action sheet subheader"
  [items]="items"
  cancelButtonText="Custom cancel">
  <button kirby-button>Custom button<kirby-icon name="pension"></kirby-icon></button>
  </kirby-action-sheet>`,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ActionSheetExampleCustomButtonComponent {
  template: string = config.template;
  items: ActionSheetItem[] = [
    { id: '1', text: 'Option 1' },
    { id: '2', text: 'Option 2' },
    { id: '3', text: 'Option 3' },
  ];
}
