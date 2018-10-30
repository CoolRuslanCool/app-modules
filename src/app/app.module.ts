import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
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
