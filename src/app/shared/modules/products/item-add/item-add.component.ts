import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display.directive';

import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  newItem: Product;

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.newItem);
  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }
}
