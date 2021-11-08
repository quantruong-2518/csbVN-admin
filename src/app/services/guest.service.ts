import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  constructor(private _http: HttpClient) {}

  getGuests(page?: number, paging?: number): Observable<any> {
    page = page ?? 0;
    paging = paging ?? 10;

    return this._http.get(
      `https://trueoutsourcing.com/api/v1/guests?page=${page}&paging=${paging}`
    );
  }
}
