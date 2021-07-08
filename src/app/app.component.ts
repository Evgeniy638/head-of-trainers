import {Component, HostListener} from '@angular/core';
import {IBreadcrumb} from "./breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'head-of-trainers';

  dataBreadcrumbs: IBreadcrumb[] = [
    {
      text: "Главная",
      link: "/"
    },
    {
      text: "Планирование",
      link: "/planning"
    }
  ]

  isScroll:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScroll = window.pageYOffset > 0;
  }
}
