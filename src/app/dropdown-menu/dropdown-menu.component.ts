import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {IonRightImageClick} from "../field/field.component";
import {IMenuItem, TypeMenu, TypeMenuItemId} from "../menu/menu.component";

interface IChangeActiveId {
  (event: TypeMenuItemId[]): void
}

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  @Input() width?: string;

  @Input() label: string = '';

  @Input() srcLeft: string = '';
  @Input() srcRight: string = '';

  @Input() isError: boolean = false;
  @Input() errorMessage?: string = '';

  @Input() isDisabled: boolean = false;
  @Input() onRightClick: IonRightImageClick = ()=>{};

  @Input() value: string = '';
  @Output() onChange = new EventEmitter<string>();

  isFocus: boolean = false;

  isVisibleElement(): boolean {
    return this.isFocus || this.value !== '';
  }

  @HostListener('window:click', ['$event'])
  onClickWithout(event: any) {
    this.isFocus = event.path.includes(this.eRef.nativeElement);
  }

  onFocus() {
    this.isFocus = true;
  }

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = this.value;
  }

  @Input() typeMenu: TypeMenu = 'single';
  arrActiveId: TypeMenuItemId[] = [];
  @Input() arrDisableId: TypeMenuItemId[] = [];
  @Input() dataMenu: IMenuItem[] = [];
  @Input() isMark: boolean | "false" | "true" = false;

  onChangeMenu(event: TypeMenuItemId[]) {
    this.arrActiveId = event;
    const item: IMenuItem | undefined = this.dataMenu.find(item => item.id === this.arrActiveId[0]);
    if (item) this.onChange.emit(item.text);
  }

  @ViewChild('menu') menuElement?: TemplateRef<any>;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }
}
