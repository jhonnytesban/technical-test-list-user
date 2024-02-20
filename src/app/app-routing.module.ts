import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [loginGuard],
    loadChildren: () => import('./auth/auth-routing.module').then( m => m.UserRoutingModule)
  },
  {
    path: 'user-list',
    canActivate: [loginGuard],
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: '**',
    redirectTo: 'user-list'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
