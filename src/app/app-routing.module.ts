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
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./screens/convo-list/convo-list.module').then(
            (m) => m.ConvoListModule
          ),
      },
      {
        path: ':convoId',
        loadChildren: () =>
          import('./screens/convo-detail/convo-detail.module').then(
            (m) => m.ConvoDetailModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./screens/convo-modify/convo-modify.module').then(
            (m) => m.ConvoModifyModule
          ),
      },
    ],
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./screens/sign-in/sign-in.module').then((m) => m.SignInModule),
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
