import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './cars.component';
import {CarComponent} from './car/car.component';

@NgModule({
  imports: [RouterModule.forChild(CarsRoutingModule.routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {

  private static routes: Routes = [
    {
      path: 'cars', component: CarsComponent, children: [
        {path: ':model', component: CarComponent}
      ]
    }
  ];

}
