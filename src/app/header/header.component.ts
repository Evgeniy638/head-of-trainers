import { Component, OnInit } from '@angular/core';
import {IBreadcrumb} from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
