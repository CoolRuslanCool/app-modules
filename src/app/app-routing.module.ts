import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private static routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'cars', loadChildren: './cars/cars.module#CarsModule'}
  ];
}
