import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: 'convo',
    loadChildren: () =>
      import('./screens/convo-list/convo-list.module').then(
        (m) => m.ConvoListModule
      ),
  },
  {
    path: 'question',
    loadChildren: () =>
      import('./screens/question/question.module').then(
        (m) => m.QuestionModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./screens/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./screens/guest/guest-routing.module').then(
        (m) => m.GuestRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
