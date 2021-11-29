import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadWordsComponent } from './bad-words.component';

const routes: Routes = [
  {
    path: '',
    component: BadWordsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadWordRoutingModule {}
