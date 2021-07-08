import {Component, Input, OnInit} from '@angular/core';

export interface IBreadcrumb {
  text: string
  link: string
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() data: IBreadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
