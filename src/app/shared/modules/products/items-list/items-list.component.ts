import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductsService } from './../../../services/products.service';

import { ItemAddComponent } from './../item-add/item-add.component';

import { Product } from './../../../../models/product/product';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @ViewChild(ItemAddComponent) itemAdd: ItemAddComponent;

  items: Product[];

  constructor(private productsService: ProductsService) {

    //Track items array changes using angular data streams
    this.productsService.allProducts$.subscribe(
      products=>{
        this.items=products;
        console.log(this.items);
      }
    );

  }

  ngOnInit() {

    this.items = this.productsService.getProducts();
    console.log(this.items);
    
  }

  open(){
    this.itemAdd.show();
  }


}
