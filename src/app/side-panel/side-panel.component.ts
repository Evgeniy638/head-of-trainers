import {Component, Input, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Input() maxWidth: string = '410px';
  @Input() mainTemplate: TemplateRef<any> | null = null;

  @Output() onDone = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
