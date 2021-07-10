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
  @Input() color: string = "#1071FF";

  getBackground() {
    return this.typeButton === 'primary' ?this.color :'white';
  }

  getColor() {
    return this.typeButton === 'primary' ?'white' :this.color;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
