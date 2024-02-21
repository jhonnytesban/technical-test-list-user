import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';

import { UserPageComponent } from './pages/user-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpdateComponent } from './modals/user-update/user-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserPageComponent, UserListComponent, UserUpdateComponent]
})
export class UserPageModule {}
