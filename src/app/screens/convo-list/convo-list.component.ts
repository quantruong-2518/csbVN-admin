import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.scss'],
})
export class ConvoListComponent implements OnInit {
  currentPage: number = 1;
  items = [];
  pageSize = 10;
  total = 15;

  constructor() {}

  ngOnInit(): void {
    this.items = [...Array(15).keys()];
  }
}
