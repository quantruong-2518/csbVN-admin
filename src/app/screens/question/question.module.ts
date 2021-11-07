import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { QuestionService } from 'src/app/services/question.service';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    QuestionRoutingModule,
    NgxSpinnerModule,
  ],
  exports: [QuestionComponent],
  providers: [QuestionService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuestionModule {}
