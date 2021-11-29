import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestQuestionRoutingModule } from './suggest-question-routing.module';
import { SuggestQuestionComponent } from './suggest-question.component';
import { SuggestionQuestionService } from 'src/app/services/suggestion-question.service';

@NgModule({
  declarations: [SuggestQuestionComponent],
  imports: [CommonModule, SuggestQuestionRoutingModule],
  exports: [SuggestQuestionComponent],
  providers: [SuggestionQuestionService],
})
export class SuggestQuestionModule {}
