import {Injectable} from "@angular/core";
import {dataTable, settingsColumns} from "./tableData";
import {IMenuItem, TypeMenu, TypeMenuItemId} from "../menu/menu.component";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  dataTable = dataTable;
  settingsColumns = settingsColumns;

  activeIdProgram: TypeMenuItemId[] = [1];
  onChangeProgram(arrId: TypeMenuItemId[]) {
    this.activeIdProgram = arrId;
  }
  dataProgram: IMenuItem[] = [
    {
      id: 1,
      text: "Все"
    },
    {
      id: 2,
      text: "Программа 1"
    },
    {
      id: 3,
      text: "Программа 2"
    },
    {
      id: 4,
      text: "Программа 3"
    }
  ];


  activeIdPeriod: TypeMenuItemId[] = [1];
  onChangePeriod(arrId: TypeMenuItemId[]) {
    this.activeIdPeriod = arrId;
  }
  dataPeriod: IMenuItem[] = [
    {
      id: 1,
      text: "Все"
    },
    {
      id: 2,
      text: "Период 1"
    },
    {
      id: 3,
      text: "Период 2"
    }
  ];


  activeIdStatus: TypeMenuItemId[] = [1];
  onChangeStatus(arrId: TypeMenuItemId[]) {
    this.activeIdStatus = arrId;
  }
  dataStatus: IMenuItem[] = [
    {
      id: 1,
      text: "Все"
    },
    {
      id: 2,
      text: "Статус 1"
    }
  ];
}
