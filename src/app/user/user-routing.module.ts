import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}