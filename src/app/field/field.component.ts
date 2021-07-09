import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @Input() width?: string;

  @Input() label: string = '';

  @Input() srcLeft: string = '';
  @Input() srcRight: string = '';

  @Input() isFocus: boolean = false;
  @Input() isVisibleElement: boolean = false;

  @Input() isError: boolean = false;
  @Input() errorMessage?: string;

  @Input() isDisabled: boolean = false;

  @Input() element?: TemplateRef<any>;

  constructor() {
  }

  @Output() onFocus = new EventEmitter<boolean>();

  onFocusField () {
    this.onFocus.emit(true);
  }

  ngOnInit(): void {
  }

}
