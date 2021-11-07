import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoListComponent } from './convo-list.component';
import { ConvoListRoutingModule } from './convo-list-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ConvoService } from 'src/app/services/convo.service';
import { ConvoDetailComponent } from './convo-detail/convo-detail.component';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ConvoListComponent, ConvoDetailComponent],
  imports: [
    CommonModule,
    ConvoListRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  exports: [ConvoListComponent],
  providers: [ConvoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConvoListModule {}
