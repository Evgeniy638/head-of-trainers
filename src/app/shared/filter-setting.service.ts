import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FilterSettingService {
  private _isVisible: boolean = true;
  isVisible(): boolean {
    return this._isVisible;
  }
  changeVisible(isVisible: boolean): void {
    this._isVisible = isVisible;
  }
}
