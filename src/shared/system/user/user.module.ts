import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserListComponent} from './list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserListComponent
  ],
  declarations: [UserListComponent]
})
export class UserModule { }
