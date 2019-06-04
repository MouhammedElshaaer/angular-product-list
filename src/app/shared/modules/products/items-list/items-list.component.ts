import { Component, OnInit } from '@angular/core';

import { Product } from './../../../../models/product/product';

import { MOCK_PRODUCTS } from './../../../../models/product/products-mockup';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: Product[];

  constructor() { }

  ngOnInit() {
    this.items = MOCK_PRODUCTS;
    console.log(this.items);
  }

}
