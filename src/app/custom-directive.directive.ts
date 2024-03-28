import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'orange';
    el.nativeElement.style.padding = '20px';
  }

}
