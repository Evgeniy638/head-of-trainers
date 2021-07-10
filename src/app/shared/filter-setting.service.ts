import {Injectable} from "@angular/core";

interface IDataCheckbox {
  id: number
  text: string
  isChecked: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FilterSettingService {
  private _isVisible: boolean = false;
  isVisible(): boolean {
    return this._isVisible;
  }
  changeVisible(isVisible: boolean): void {
    this._isVisible = isVisible;
  }

  onChangeCheckedCreator(system: IDataCheckbox[], id: number) {
    return (isChecked: boolean) => {
      const item = system.find(item => item.id === id);
      if (item) item.isChecked = isChecked;
    }
  }

  systemCheckbox: IDataCheckbox[] = [
    {
      id: 1,
      text: "Поиск",
      isChecked: true
    },
    {
      id: 2,
      text: "Организация",
      isChecked: true
    },
    {
      id: 3,
      text: "Роль",
      isChecked: true
    },
    {
      id: 4,
      text: "Статус",
      isChecked: true
    }
  ];

  additionalCheckbox: IDataCheckbox[] = [
    {
      id: 1,
      text: "Должность",
      isChecked: false
    },
    {
      id: 2,
      text: "Округ",
      isChecked: false
    },
    {
      id: 3,
      text: "Подразделение",
      isChecked: false
    },
    {
      id: 4,
      text: "Программа",
      isChecked: false
    },
    {
      id: 5,
      text: "Табельный номер",
      isChecked: false
    },
    {
      id: 6,
      text: "ID",
      isChecked: false
    },
    {
      id: 7,
      text: "Категория",
      isChecked: false
    },
    {
      id: 8,
      text: "Кол-во сотрудников",
      isChecked: false
    }
  ];
}
