import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LazyRouteRoutingModule} from './lazy-route-routing.module';
import {LazyRouteComponent} from './lazy-route/lazy-route.component';
import {SystemService} from '../../shared/system/system.service';

@NgModule({
  imports: [
    CommonModule,
    LazyRouteRoutingModule
  ],
  declarations: [LazyRouteComponent],
  providers: [SystemService]
})
export class LazyRouteModule {
}
