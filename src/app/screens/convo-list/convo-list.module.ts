import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoListComponent } from './convo-list.component';
import { ConvoListRoutingModule } from './convo-list-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [ConvoListComponent],
  imports: [CommonModule, ConvoListRoutingModule, NgxPaginationModule],
  exports: [ConvoListComponent],
})
export class ConvoListModule {}
