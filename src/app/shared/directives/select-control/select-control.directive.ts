import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[selectControl]'
})
export class SelectControlDirective {

  @Input() set selectControl( condition : boolean ) {
    
    condition? this.el.nativeElement.checked=true: this.el.nativeElement.checked = false;

  }

  constructor( private el : ElementRef ) { }

}
