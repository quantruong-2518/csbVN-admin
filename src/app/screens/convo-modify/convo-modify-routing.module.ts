import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvoModifyComponent } from './convo-modify.component';

const routes: Routes = [
  {
    path: '',
    component: ConvoModifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvoModifyRoutingModule {}
