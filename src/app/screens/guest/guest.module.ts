import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { GuestRoutingModule } from './guest-routing.module';

import { GuestComponent } from './guest.component';

import { GuestService } from 'src/app/services/guest.service';

@NgModule({
  declarations: [GuestComponent],
  imports: [CommonModule, GuestRoutingModule, NgxPaginationModule],
  exports: [GuestComponent],
  providers: [GuestService],
})
export class GuestModule {}
