import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemService } from './system.service';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    UserModule
  ],
  declarations: [],
  providers: [SystemService]
})
export class SystemModule { }
