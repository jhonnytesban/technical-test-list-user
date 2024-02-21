import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageComponent } from './pages/user-page.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpdateComponent } from './modals/user-update/user-update.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    UserPageComponent,
    UserListComponent,
    UserUpdateComponent
  ]
})
export class UserPageModule {}
