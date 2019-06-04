import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ItemViewComponent } from './../item-view/item-view.component';

import { Product } from './../../../../models/product/product';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(ItemViewComponent) itemView: ItemViewComponent;

  constructor() { }

  ngOnInit() {
  }

  open(){
    this.itemView.show();
  }

}
