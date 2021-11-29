import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BadWordService {
  constructor(private _http: HttpClient) {}

  getSensitiveWords(): Observable<any> {
    return this._http.get(`https://trueoutsourcing.com/api/v1/message-blocked`);
  }

  createSensitiveWord(data: { title: string }): Observable<any> {
    return this._http.post(
      `https://trueoutsourcing.com/api/v1/message-blocked`,
      data
    );
  }

  removeSensitiveWord(id: string): Observable<any> {
    return this._http.delete(
      `https://trueoutsourcing.com/api/v1/message-blocked/${id}`
    );
  }
}
