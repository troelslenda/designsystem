import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

// Counter for generating unique element ids
let uniqueId = 0;

@Component({
  selector: 'kirby-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isExpanded', [
      state('true', style({ height: '*', visibility: 'visible' })),
      state('false', style({ height: '0px', visibility: 'hidden' })),
      transition('true <=> false', animate('0.2s')),
    ]),
  ],
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string;
  @Input() isExpanded: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() disabledTitle: string;

  ngOnInit(): void {
    if (this.isDisabled) {
      this.isExpanded = false;
    }
  }

  getTitle() {
    if (this.isDisabled && !!this.disabledTitle) {
      return this.disabledTitle;
    } else {
      return this.title;
    }
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded && !this.isDisabled;
  }

  // IDs used for a11y labelling
  _titleId = `kirby-accordion-item-title-${++uniqueId}`;
  _contentId = `kirby-accordion-item-content-${uniqueId}`;
}
