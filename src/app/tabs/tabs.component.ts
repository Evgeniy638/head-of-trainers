import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export type typeTabId = string | number;

export interface ITab {
  id: typeTabId,
  text: string
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() dataTabs: ITab[] = [];
  @Output() onChangeActiveTab = new EventEmitter<typeTabId>();
  @Input() activeTabId: typeTabId = '';

  onClick(id: typeTabId) {
    this.onChangeActiveTab.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
