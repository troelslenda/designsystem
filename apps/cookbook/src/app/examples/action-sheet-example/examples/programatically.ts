import { Component } from '@angular/core';

import { ActionSheetConfig, ActionSheetItem, ModalController } from '@kirbydesign/designsystem';

const config = {
  selector: 'cookbook-action-sheet-example-programatically',
  template: `<button kirby-button (click)="showActionSheet()">Show action sheet</button>`,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class ActionSheetExampleProgramaticallyComponent {
  template: string = config.template;

  constructor(private modalController: ModalController) {}

  showActionSheet() {
    const config: ActionSheetConfig = {
      header: 'Your action sheet header',
      subheader: 'Your action sheet subheader',
      items: [
        { id: '1', text: 'Option 1' },
        { id: '2', text: 'Option 2' },
        { id: '3', text: 'Option 3' },
      ],
      cancelButtonText: 'Custom cancel',
    };
    this.modalController.showActionSheet(config, this.onActionSelected);
  }

  private onActionSelected(selection: ActionSheetItem) {
    console.log(`Action sheet selection: ${JSON.stringify(selection)}`);
  }
}
