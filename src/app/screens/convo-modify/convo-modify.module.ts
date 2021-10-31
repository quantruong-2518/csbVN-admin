import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvoModifyComponent } from './convo-modify.component';
import { ConvoModifyRoutingModule } from './convo-modify-routing.module';

@NgModule({
  declarations: [ConvoModifyComponent],
  imports: [CommonModule, ConvoModifyRoutingModule],
  exports: [ConvoModifyComponent],
})
export class ConvoModifyModule {}
