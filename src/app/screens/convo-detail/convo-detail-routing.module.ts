import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvoDetailComponent } from './convo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ConvoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvoDetailRoutingModule {}
