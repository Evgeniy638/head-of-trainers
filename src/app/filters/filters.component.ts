import { Component, OnInit } from '@angular/core';
import {IonRightImageClick} from "../field/field.component";

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

  onRightClick() {
    console.log("image")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
