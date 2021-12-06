import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../models/suggest-question.model';

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

  getCardById(cardId: string): Observable<any> {
    return this._http.get(`https://trueoutsourcing.com/api/v1/cards/${cardId}`);
  }

  removeCard(id: string): Observable<any> {
    return this._http.delete(`https://trueoutsourcing.com/api/v1/cards/${id}`);
  }

  createCard(card: ICard): Observable<any> {
    return this._http.post('https://trueoutsourcing.com/api/v1/cards', card);
  }

  updateCard(card: ICard): Observable<any> {
    return this._http.put(
      `https://trueoutsourcing.com/api/v1/cards/${card._id}`,
      card
    );
  }
}
