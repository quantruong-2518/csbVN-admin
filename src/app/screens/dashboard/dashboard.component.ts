import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalConversations: number;
  totalGuests: number;
  totalQuestions: number;

  constructor(private _dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashboard();
  }

  getDashboard() {
    this._dashboardService.getDashboard().subscribe((res) => {
      const { totalConversations, totalGuests, totalQuestions } = res.data;

      this.totalConversations = totalConversations;
      this.totalGuests = totalGuests;
      this.totalQuestions = totalQuestions;
    });
  }
}
