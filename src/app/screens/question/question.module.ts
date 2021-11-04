import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { QuestionService } from 'src/app/services/question.service';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [QuestionComponent],
  imports: [CommonModule, NgxPaginationModule, QuestionRoutingModule],
  exports: [QuestionComponent],
  providers: [QuestionService],
})
export class QuestionModule {}
