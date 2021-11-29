import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';

  constructor(private _route: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  signIn() {
    const admin = {
      username: this.username,
      password: this.password,
    };

    this._auth.signIn(admin).subscribe((res) => {
      alert('Dang nhap thanh cong');
      const aToken = res.data.accessToken;
      localStorage.setItem('access_token', aToken)
      this._route.navigate(['']);
    });

  }
}
