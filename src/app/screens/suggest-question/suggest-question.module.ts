import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestQuestionRoutingModule } from './suggest-question-routing.module';
import { SuggestQuestionComponent } from './suggest-question.component';
import { SuggestionQuestionService } from 'src/app/services/suggestion-question.service';
import { QuestionService } from 'src/app/services/question.service';
import { ModifySuggestionComponent } from './modify-suggestion/modify-suggestion.component';

@NgModule({
  declarations: [SuggestQuestionComponent, ModifySuggestionComponent],
  imports: [CommonModule, SuggestQuestionRoutingModule],
  exports: [SuggestQuestionComponent, ModifySuggestionComponent],
  providers: [SuggestionQuestionService, QuestionService],
})
export class SuggestQuestionModule {}
