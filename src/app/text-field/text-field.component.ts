import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() width?: string;

  @Input() label: string = '';

  @Input() srcLeft: string = '';
  @Input() srcRight: string = '';

  @Input() isError: boolean = false;
  @Input() errorMessage?: string = '';

  @Input() isDisabled: boolean = false;

  @Input() value: string = '';
  @Output() onChange = new EventEmitter<string>();

  isFocus: boolean = false;

  isVisibleElement(): boolean {
    return this.isFocus || this.value !== '';
  }

  onBlur() {
    this.isFocus = false;
  }

  onFocus() {
    this.isFocus = true;
  }

  onChangeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChange.emit(input.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
