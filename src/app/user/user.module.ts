import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { FolderPageRoutingModule } from './folder-routing.module';

import { UserPageComponent } from './pages/user-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule
  ],
  declarations: [UserPageComponent]
})
export class UserPageModule {}
