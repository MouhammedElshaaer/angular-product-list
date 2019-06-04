import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[display]'
})
export class DisplayDirective {

  constructor(private el : ElementRef) { }

  hide(){
    console.log(this.el);
    this.el.nativeElement.style.display='none';
  }

  show(){
    console.log(this.el);
    this.el.nativeElement.style.display='block';
  }

}
