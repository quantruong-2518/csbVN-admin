import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvoListComponent } from './convo-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConvoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvoListRoutingModule {}
