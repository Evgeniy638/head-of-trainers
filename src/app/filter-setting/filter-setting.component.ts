import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterSettingService} from "../shared/filter-setting.service";

@Component({
  selector: 'app-filter-setting',
  templateUrl: './filter-setting.component.html',
  styleUrls: ['./filter-setting.component.scss']
})
export class FilterSettingComponent implements OnInit {
  constructor(public filterSettingService: FilterSettingService) { }

  ngOnInit(): void {
  }

}
