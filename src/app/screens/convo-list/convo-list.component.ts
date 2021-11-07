import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConvoService } from 'src/app/services/convo.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.scss'],
})
export class ConvoListComponent implements OnInit {
  currentPage: number = 1;
  conversations = [];
  pageSize = 10;
  total = 0;

  private _subscription = new Subscription();

  constructor(
    private _convoService: ConvoService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getConversations();
    this._spinner.show();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getConversations() {
    this._subscription.add(
      this._convoService.getConversations().subscribe(({ data }) => {
        this._spinner.hide();
        this.conversations = data.items;
        this.total = data.total;
      })
    );
  }

  changePage(page: number) {
    const currentPageIndex = page - 1;

    this._subscription.add(
      this._convoService
        .getConversations(currentPageIndex)
        .subscribe(({ data }) => {
          this.conversations = data.items;
          this.currentPage = page;
        })
    );
  }
}
