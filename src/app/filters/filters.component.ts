import { Component, OnInit } from '@angular/core';
import {IMenuItem, TypeMenuItemId} from "../menu/menu.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  value: string = '';

  onChangeTextField(value: string) {
    this.value = value;
    console.log(value)
  }

  arrActiveId: TypeMenuItemId[] = [1];

  onChangeDropDown(arrId: TypeMenuItemId[]) {
    this.arrActiveId = arrId;
  }

  onRightClick() {
    console.log("image")
  }

  dataMenu: IMenuItem[] = [
    {
      id: 1,
      text: "Привет Привет"
    },
    {
      id: 2,
      text: "Привет"
    },
    {
      id: 3,
      text: "Привет"
    }
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
