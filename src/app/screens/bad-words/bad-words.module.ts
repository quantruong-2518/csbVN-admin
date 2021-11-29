import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadWordsComponent } from './bad-words.component';
import { BadWordRoutingModule } from './bad-word-routing.module';
import { BadWordService } from 'src/app/services/badword.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BadWordsComponent],
  imports: [CommonModule, BadWordRoutingModule, FormsModule],
  exports: [BadWordsComponent],
  providers: [BadWordService],
})
export class BadWordsModule {}
