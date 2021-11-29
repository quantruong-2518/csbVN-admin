import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuggestQuestionComponent } from './suggest-question.component';

const routes: Routes = [
  {
    path: '',
    component: SuggestQuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuggestQuestionRoutingModule {}
