import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoListComponent } from './convo-list.component';
import { ConvoListRoutingModule } from './convo-list-routing.module';

@NgModule({
  declarations: [ConvoListComponent],
  imports: [CommonModule, ConvoListRoutingModule],
  exports: [ConvoListComponent],
})
export class ConvoListModule {}
