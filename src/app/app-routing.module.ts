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
      import('./screens/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'bad-word',
    loadChildren: () =>
      import('./screens/bad-words/bad-words.module').then(
        (m) => m.BadWordsModule
      ),
  },
  {
    path: 'suggest-question',
    loadChildren: () =>
      import('./screens/suggest-question/suggest-question.module').then(
        (m) => m.SuggestQuestionModule
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
