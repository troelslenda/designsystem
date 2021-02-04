import { Component, Input, Output } from '@angular/core';

const config = {
  selector: 'cookbook-form-field-date-input-icon-example',
  template: `
<kirby-form-field label="Date input with Calendar Icon">
  <input type="text" kirby-input placeholder="Write Date or Select from Calendar" [(value)]="selectedDate"/>
  <kirby-input-icon icon="calendar"  (click)="onClick($event)"></kirby-input-icon>
</kirby-form-field>

  <kirby-card *ngIf="showCalendar">
   <kirby-calendar
    [timezone]="'local'"
    [selectedDate]="selectedDate"
    (dateChange)="onDateChange($event)"
  >
  </kirby-calendar>
  </kirby-card>
 
`,
};
@Component({
  selector: config.selector,
  template: config.template,
})
export class FormFieldDateInputIconExampleComponent {
  template: string = config.template;

  @Input() showCalendar: boolean;
  @Output() selectedDate: string;

  public onClick($event: any): void {
    this.showCalendar = !this.showCalendar;
  }
  public onDateChange($event: Date): void {
    console.log('onDateChange', $event);
    this.selectedDate = $event.toLocaleDateString();
    this.showCalendar = false;
  }
}
