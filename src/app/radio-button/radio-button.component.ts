import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() id?: number;
  @Input() activeId?: number;
  @Input() text?: string;
  @Output() onClick = new EventEmitter<number>();

  isActive(): boolean {
    return this.activeId === this.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
