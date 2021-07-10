import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() text: string = '';
  @Input() isChecked: boolean = false;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
