import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = 'red';
   }

}
