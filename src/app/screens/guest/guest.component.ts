import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
})
export class GuestComponent implements OnInit {
  currentPage: number = 1;
  guests = [];
  pageSize = 10;
  total = 0;

  private _subscription = new Subscription();

  constructor(private _guestService: GuestService) {}

  ngOnInit(): void {
    this.getGuests();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getGuests() {
    this._subscription.add(
      this._guestService.getGuests().subscribe((res) => {
        const { items, total } = res.data;

        this.guests = items;
        this.total = total;
      })
    );
  }

  changePage(page: number) {
    const reqPage = page - 1;
    this._subscription.add(
      this._guestService.getGuests(reqPage).subscribe((res) => {
        const { items } = res.data;
        this.guests = items;
      })
    );

    this.currentPage = page;
  }
}
