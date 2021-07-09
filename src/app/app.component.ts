import {Component, HostListener} from '@angular/core';
import {IBreadcrumb} from "./breadcrumbs/breadcrumbs.component";
import {ITab, typeTabId} from "./tabs/tabs.component";

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

  activeTabId: typeTabId = 1;
  onChangeTabId(id: typeTabId) {
    this.activeTabId = id;
  }
  dataTabs: ITab[] = [
    {
      id: 1,
      text: "Групповое"
    },
    {
      id: 2,
      text: "Индивидуальное"
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScroll = window.pageYOffset > 0;
  }
}
