import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display.directive';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss']
})
export class ItemDeleteComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  constructor() { }

  ngOnInit() {
  }

  delete(){
    console.log(this.item);
  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
