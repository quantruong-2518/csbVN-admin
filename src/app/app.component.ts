import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
        if (this._router.url === '/sign-in') this.showHeader = false;
      }
    });
  }

  getCurrentRoute(): string {
    return this._router.url;
  }
}
