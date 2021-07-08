import {Component, HostListener, Input, OnInit, TemplateRef} from '@angular/core';
import {IBreadcrumb} from "../breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() dataBreadcrumbs: IBreadcrumb[] = []
  @Input() title: string = '';
  @Input() srcTitle: string = '';
  @Input() rightDesktop?: TemplateRef<any>;
  @Input() rightMobile?: TemplateRef<any>;

  isScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScroll = window.pageYOffset > 0;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
