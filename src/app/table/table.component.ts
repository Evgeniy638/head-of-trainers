import {Component, Input, OnInit} from '@angular/core';
import {dataTable} from "../shared/tableData";

type TypeCell = 'string' | 'percent';

export interface IColumn {
  name: string
  type: TypeCell
  isFlexGrow?: boolean
  isNoneDisplayInMobile?: boolean
  shortName?: string
  isNoWrap?: boolean
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataTable: string[][] = [];
  @Input() settingsColumns: IColumn[] = [];

  iterateForRows() {
    return [...dataTable[0].keys()];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
