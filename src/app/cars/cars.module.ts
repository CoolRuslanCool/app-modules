import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from './car/car.component';
import {CarsComponent} from './cars.component';
import {CarService} from './car.service';
import {CarsRoutingModule} from './cars-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ],
  declarations: [
    CarsComponent,
    CarComponent
  ],
  providers: [CarService]
})
export class CarsModule {
}
