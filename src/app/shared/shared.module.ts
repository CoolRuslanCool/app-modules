import { NgModule } from '@angular/core';
import {TextColorDirective} from './text-color.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    TextColorDirective
  ],
  exports: [
    TextColorDirective
  ]
})
export class SharedModule { }
