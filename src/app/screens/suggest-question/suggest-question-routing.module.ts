import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifySuggestionComponent } from './modify-suggestion/modify-suggestion.component';
import { SuggestQuestionComponent } from './suggest-question.component';

const routes: Routes = [
  {
    path: '',
    component: SuggestQuestionComponent,
  },
  {
    path: 'create',
    component: ModifySuggestionComponent,
  },
  {
    path: 'update/:cardId',
    component: ModifySuggestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestQuestionRoutingModule {}
