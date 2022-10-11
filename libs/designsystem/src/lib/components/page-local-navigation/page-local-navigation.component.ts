import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowRef } from '../../types';
import { LocalNavigationItem } from './page-local-navigation-item';

@Component({
  selector: 'kirby-page-local-navigation',
  templateUrl: './page-local-navigation.component.html',
  styleUrls: ['./page-local-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLocalNavigationComponent implements AfterViewInit {
  private readonly DEBOUNCE_TIME_MS = 250;

  selectedIndex$ = new BehaviorSubject(0);
  private _selectedIndex = 0;
  @Input() set selectedIndex(value: number) {
    if (value > -1 && value !== this._selectedIndex) {
      this._selectedIndex = value;
      this.selectedIndex$.next(value);
    }
  }
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  items$ = new BehaviorSubject<LocalNavigationItem[]>([]);
  private _items: LocalNavigationItem[] = [];
  @Input() set items(value: LocalNavigationItem[]) {
    this._items = value;
    this.items$.next(value ?? []);
  }
  get items(): LocalNavigationItem[] {
    return this._items;
  }

  /**
   * Emits the selected item
   */
  @Output() itemSelect = new EventEmitter<LocalNavigationItem>();

  @ViewChild('tabBar') tabBarElementRef?: ElementRef<HTMLElement>;
  private get tabBarNativeElement(): HTMLElement | undefined {
    return this.tabBarElementRef?.nativeElement;
  }

  constructor(private window: WindowRef) {
    console.warn(
      'kirby-local-navigation component is an experimental feature and should not be used in a production environment.'
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.scrollToSelectedTab(this.selectedIndex);
    }, this.DEBOUNCE_TIME_MS);
  }

  onTabChange(index: number, item: LocalNavigationItem): void {
    if (this.selectedIndex !== index && index > -1) {
      this.selectedIndex = index;
      this.scrollToSelectedTab(index);
      this.itemSelect.emit(item);
    }
  }

  private getSelectedItemElement(index: number): HTMLElement | undefined {
    const tabBarElement = this.tabBarNativeElement;

    if (tabBarElement) {
      return tabBarElement.children.item(index) as HTMLElement;
    }
  }

  focusNext(index: number): void {
    const tabBarElement = this.tabBarNativeElement;
    if (tabBarElement) {
      const next = tabBarElement.children.item(index) as HTMLElement;
      next?.focus({ preventScroll: false });
    }
  }

  private scrollToSelectedTab(index: number): void {
    const tabBarElement = this.tabBarNativeElement;
    const selectedTabElement = this.getSelectedItemElement(index);

    if (tabBarElement && selectedTabElement) {
      const selectedTabElementWidth = selectedTabElement.getBoundingClientRect().width;
      const selectedTabElementOffsetLeft = selectedTabElement.offsetLeft;
      const tabBarElementWidth = tabBarElement.getBoundingClientRect().width;
      const tabBarElementOffset = tabBarElement.offsetLeft;

      this.window.nativeWindow.requestAnimationFrame(() => {
        tabBarElement?.scrollTo({
          behavior: 'smooth',
          left: Math.max(
            0,
            selectedTabElementOffsetLeft -
              (tabBarElementWidth - tabBarElementOffset - selectedTabElementWidth) / 2
          ),
        });
      });
    }
  }
}
