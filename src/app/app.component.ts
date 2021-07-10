import {Component, HostListener} from '@angular/core';
import {IBreadcrumb} from "./breadcrumbs/breadcrumbs.component";
import {ITab, typeTabId} from "./tabs/tabs.component";
import {IMenuItem, TypeMenuItemId} from "./menu/menu.component";

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

  //меню
  arrActiveId: TypeMenuItemId[] = [1];
  arrDisableId: TypeMenuItemId[] = [2, 3];
  dataMenu: IMenuItem[] = [
    {
      id: 1,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 2,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 3,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 4,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 5,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 6,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 7,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    },
    {
      id: 8,
      text: "Привет",
      srcLeftIcon: "assets/svg/add.svg",
      srcRightIcon: "assets/svg/add.svg",
    }
  ]
  onChangeMenu(event: TypeMenuItemId[]) {
    this.arrActiveId = event;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScroll = window.pageYOffset > 0;
  }
}
