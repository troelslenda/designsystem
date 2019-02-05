import {
  Component,
  OnInit,
  Input,
  Directive,
  TemplateRef,
  ContentChild,
  EventEmitter,
  Output,
  ContentChildren,
  QueryList
} from '@angular/core';
import { ListCellComponent } from './list-cell/list-cell.component';

@Directive({
  selector: '[kirbyListItem]'
})
export class ListItemDirective { }

@Directive({
  selector: '[kirbyListHeader]'
})
export class ListHeaderDirective { }

@Directive({
  selector: '[kirbyListCell]'
})
export class ListCellDirective { }

@Directive({
  selector: '[kirbyListSectionHeader]'
})
export class ListSectionHeaderDirective {}

@Component({
  selector: 'kirby-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: any[];
  @Output() itemSelect = new EventEmitter<any>();
  @Input() getSectionName?: (item: any) => string;

  // The first element that matches ListItemDirective. As a structural directive it unfolds into a template. This is a reference to that.
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;
  @ContentChild(ListHeaderDirective, {read: TemplateRef}) headerTemplate;
  @ContentChild(ListSectionHeaderDirective, {read: TemplateRef}) sectionHeaderTemplate;
  @ContentChildren(ListCellDirective, { read: TemplateRef }) listCellTemplates: QueryList<any>;
  @ContentChildren(ListCellComponent, { read: TemplateRef }) listCellComponentTemplates: QueryList<ListCellComponent>;

  isSectionsEnabled: boolean;

  constructor() { }

  ngOnInit() {
    if (this.getSectionName) {
      this.isSectionsEnabled = true;
    }
  }

  onItemClick(row: any): void {
    this.itemSelect.emit(row);
  }

  onItemTap(selectedItem: any): void {
    this.itemSelect.emit(selectedItem);
  }

  rowDefinition(headerTemplate: any): string {
    return headerTemplate ? 'auto,*' : '*' ;
  }

  rowNumberForListView(headerTemplate: any): string {
    return headerTemplate ? '1' : '0';
  }
}
