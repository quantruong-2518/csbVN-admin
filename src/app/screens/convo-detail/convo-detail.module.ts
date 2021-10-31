import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoDetailComponent } from './convo-detail.component';
import { ConvoDetailRoutingModule } from './convo-detail-routing.module';

@NgModule({
  declarations: [ConvoDetailComponent],
  imports: [CommonModule, ConvoDetailRoutingModule],
  exports: [ConvoDetailComponent],
})
export class ConvoDetailModule {}
