import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  signIn(user: { username: string; password: string }): Observable<any> {
    return this._http.post(
      `https://trueoutsourcing.com/api/v1/auth/login`,
      user
    );
  }
}
