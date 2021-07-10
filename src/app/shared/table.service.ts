import {Injectable} from "@angular/core";
import {dataTable, settingsColumns} from "./tableData";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  dataTable = dataTable;
  settingsColumns = settingsColumns;
}
