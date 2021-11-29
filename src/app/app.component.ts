import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'csbVN-admin';
  showHeader = true;

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (this._router.url === '/sign-in') {
          this.showHeader = false;
        } else this.showHeader = true;
      }
    });

    const aToken = localStorage.getItem('access_token');
    if (!aToken) {
      this._router.navigate(['sign-in']);
    }
  }

  getCurrentRoute(): string {
    return this._router.url;
  }

  signOut() {
    localStorage.clear();
  }
}
