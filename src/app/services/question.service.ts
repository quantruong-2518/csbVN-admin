import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICard } from '../models/suggest-question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  createQuestion(question, isMulti?: boolean): Observable<any> {
    return this._http.post(
      'https://trueoutsourcing.com/api/v1/questions?multiple=true',
      question
    );
  }

  getQuestions(page?: number, paging?: number): Observable<any> {
    page = page ?? 0;
    paging = paging ?? 10;

    return this._http.get(
      `https://trueoutsourcing.com/api/v1/questions?page=${page}&paging=${paging}`
    );
  }

  searchQuestion(key: string): Observable<any> {
    return this._http.get(
      `https://trueoutsourcing.com/api/v1/questions/search?q=${key}`
    );
  }

  createCard(card: ICard): Observable<any> {
    return this._http.post('https://trueoutsourcing.com/api/v1/cards', card);
  }
}
