import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kirby-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Kirby Design System';
  public showCardBackground = true;
  public dimCardBackground = false;
  public hideCardForeground = false;
  constructor() { }

  ngOnInit() {
  }
}
