import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'head-of-trainers';

  isScroll:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScroll = window.pageYOffset > 0;
  }
}
