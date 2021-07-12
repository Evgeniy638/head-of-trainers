import { Component, OnInit } from '@angular/core';
import {ITab, typeTabId} from "../tabs/tabs.component";

interface IDataRadioButton {
  text: string
  id: number
}

@Component({
  selector: 'app-planning-side-panel',
  templateUrl: './planning-side-panel.component.html',
  styleUrls: ['./planning-side-panel.component.scss']
})
export class PlanningSidePanelComponent implements OnInit {
  isVisible: boolean = true;

  activeTabId: typeTabId = 1;
  onChangeActiveTab(id: typeTabId) {
    this.activeTabId = id;
  }
  dataTabs: ITab[] = [
    {
      id: 1,
      text: "Основное"
    },
    {
      id: 2,
      text: "Участники"
    }
  ]

  // radio buttons
  activeRadioId: number = 1;
  onChangeActiveRadioButton (id: number) {
    this.activeRadioId = id;
  }
  dataRadioButtons: IDataRadioButton[] = [
    {
      id: 1,
      text: "Не использовать код доступа"
    },
    {
      id: 2,
      text: "Требовать регистрацию"
    },
    {
      id: 3,
      text: "Запросить только имя и фамилию"
    },
    {
      id: 4,
      text: "Не требовать регистрацию, имя и фамилию"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
