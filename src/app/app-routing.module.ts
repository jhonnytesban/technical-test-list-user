import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then( m => m.UserRoutingModule)
  },
  {
    path: 'users',
    canActivate: [loginGuard],
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
