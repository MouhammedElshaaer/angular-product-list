import { Component, OnInit, ViewChild } from '@angular/core';

import { ItemAddComponent } from './../item-add/item-add.component';

import { Product } from './../../../../models/product/product';

import { MOCK_PRODUCTS } from './../../../../models/product/products-mockup';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @ViewChild(ItemAddComponent) itemAdd: ItemAddComponent;

  items: Product[];

  constructor() { }

  ngOnInit() {
    this.items = MOCK_PRODUCTS;
    console.log(this.items);
  }

  open(){
    this.itemAdd.show();
  }


}
