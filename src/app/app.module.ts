import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsModule} from './cars/cars.module';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    CarsModule,
    SharedModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
