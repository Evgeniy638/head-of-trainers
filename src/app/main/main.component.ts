import { Component, OnInit } from '@angular/core';
import {TableService} from "../shared/table.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public tableService: TableService) { }

  ngOnInit(): void {
  }

}
