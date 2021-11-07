import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConvoService } from 'src/app/services/convo.service';

@Component({
  selector: 'app-convo-detail',
  templateUrl: './convo-detail.component.html',
  styleUrls: ['./convo-detail.component.scss'],
})
export class ConvoDetailComponent implements OnInit {
  messages = [];
  guest: any;
  data: any;

  constructor(
    private _actRoute: ActivatedRoute,
    private _convoServices: ConvoService
  ) {}

  ngOnInit(): void {
    this._actRoute.params.subscribe((params) => {
      console.log('params', params);
      this._convoServices
        .getConversationById(params.convoId)
        .subscribe(({ data }) => {
          this.messages = data.messages;
          this.data = data;
          this.guest = data.guest;
        });
    });
  }

  ngOnDestroy() {}

  trackByIndex(index, item) {
    return index;
  }
}
