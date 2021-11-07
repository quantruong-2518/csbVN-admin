import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvoService {
  constructor(private _http: HttpClient) {}

  getConversations(page?: number, paging?: number): Observable<any> {
    page = page ?? 0;
    paging = paging ?? 10;

    return this._http.get(
      `https://trueoutsourcing.com/api/v1/conversations?page=${page}&paging=${paging}`
    );
  }

  getConversationById(convoId: string): Observable<any> {
    return this._http.get(
      `https://trueoutsourcing.com/api/v1/conversations/${convoId}`
    );
  }
}
