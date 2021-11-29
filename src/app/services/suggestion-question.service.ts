import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionQuestionService {
  constructor(private _http: HttpClient) {}

  getCardOfCarousel(carousel: number): Observable<any> {
    return this._http.get(
      `https://trueoutsourcing.com/api/v1/cards?type=${carousel}`
    );
  }

  getImages(): Observable<any> {
    return this._http.get(`https://trueoutsourcing.com/api/v1/cards/images`);
  }
}
