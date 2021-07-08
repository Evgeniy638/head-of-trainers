import {Component, Input, OnInit} from '@angular/core';

type TypeButton = 'primary' | 'secondary' | 'text';
type SizeButton = 'big' | 'normal';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() srcImage: string = '';
  @Input() typeButton: TypeButton = 'primary';
  @Input() sizeButton: SizeButton = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

}
