import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-setting',
  templateUrl: './filter-setting.component.html',
  styleUrls: ['./filter-setting.component.scss']
})
export class FilterSettingComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onDone = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
