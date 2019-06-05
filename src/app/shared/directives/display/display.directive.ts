import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[display]'
})
export class DisplayDirective {

  constructor(private el : ElementRef) { }

  hide(){
    this.el.nativeElement.style.display='none';
  }

  show(){
    this.el.nativeElement.style.display='grid';
  }

}
