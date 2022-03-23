import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('dataTableUplata') table;
  dataTable: any;

  constructor() { }

  ngOnInit(): void {
  }

}
