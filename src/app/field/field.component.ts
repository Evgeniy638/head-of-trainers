import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() width?: string;

  @Input() value: string = '';
  @Input() label: string = '';

  @Input() srcLeft: string = '';
  @Input() srcRight: string = '';

  @Input() isActive: boolean = false;

  @Input() isError: boolean = false;
  @Input() errorMessage?: string;

  @Input() isDisabled: boolean = false;

  @Output() onChange = new EventEmitter<string>();

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }

  isString(value: any): boolean {
    return typeof value === "string";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
