import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'kirby-input-icon',
  template: `
    <button class="input-icon" [ngClass]="cssClass" ion-button icon-only color="transparent">
      <ion-icon name="{{ icon }}"></ion-icon>
    </button>
  `,
  styleUrls: ['./input-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputIconComponent {
  @Input() cssClass: string;
  @Input() icon: string;
}
