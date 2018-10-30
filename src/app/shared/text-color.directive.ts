import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit{

  @HostBinding('style.color') color = 'blue';

  constructor() { }

  ngOnInit(): void {
    this.color = 'red';
  }

}
