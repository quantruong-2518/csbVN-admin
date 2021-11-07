import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvoDetailComponent } from './convo-detail/convo-detail.component';

import { ConvoListComponent } from './convo-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConvoListComponent,
  },
  {
    path: ':convoId',
    component: ConvoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvoListRoutingModule {}
