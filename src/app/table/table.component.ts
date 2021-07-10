import {Component, Input, OnInit} from '@angular/core';

type TypeCell = 'string' | 'percent';

export interface IColumn {
  name: string
  type: TypeCell
  isFlexGrow?: boolean,
  isNoneDisplayInMobile?: boolean
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataTable: string[][] = [];
  @Input() settingsColumns: IColumn[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
