import { ItemDeleteComponent } from './../item-delete/item-delete.component';
import { ItemUpdateComponent } from './../item-update/item-update.component';
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
  @ViewChild(ItemUpdateComponent) itemUpdate: ItemUpdateComponent;
  @ViewChild(ItemDeleteComponent) itemDelete: ItemDeleteComponent;

  constructor() { }

  ngOnInit() {
  }

  open(){
    this.itemView.show();
  }

  update(){
    this.itemUpdate.show();
  }

  delete(){
    this.itemDelete.show();
  }

}
