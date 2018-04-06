import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lazy-route', loadChildren: 'app-b/lazy-route/lazy-route.module#LazyRouteModule'},
  { path: 'system', loadChildren: './../shared/system/system.module#SystemModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
