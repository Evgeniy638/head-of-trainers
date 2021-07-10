import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type TypeMenuItemId = string | number;

export interface IMenuItem {
  id: TypeMenuItemId
  text: string
  srcLeftIcon?: string
  srcRightIcon?: string
}

export type TypeMenu = 'single' | 'multi';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() top?: string;
  @Input() left?: string;
  @Input() bottom?: string;
  @Input() right?: string;
  @Input() typeMenu: TypeMenu = 'single';
  @Input() arrActiveId: TypeMenuItemId[] = [];
  @Input() arrDisableId: TypeMenuItemId[] = [];
  @Input() dataMenu: IMenuItem[] = [];
  @Input() isMark: boolean | "false" | "true" = false;

  @Output() onChangeActiveId = new EventEmitter<TypeMenuItemId[]>();

  checkIsMark(): boolean {
    return this.isMark && this.isMark !== "false";
  }

  pathToSvgDone: string = 'assets/svg/done.svg';

  onClick(id: TypeMenuItemId) {
    if (this.typeMenu === 'single') {
      this.onChangeActiveId.emit([id]);

    } else {
      let event: TypeMenuItemId[];
      const index: number = this.arrActiveId.indexOf(id);

      if (index > -1) {
        event = [
          ...this.arrActiveId.slice(0, index),
          ...this.arrActiveId.slice(index + 1)
        ];
      } else {
        event = [...this.arrActiveId, id]
      }

      this.onChangeActiveId.emit(event);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
