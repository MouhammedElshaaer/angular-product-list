import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductsService } from './../../../services/products.service';

import { ItemAddComponent } from './../item-add/item-add.component';

import { Product } from './../../../../models/product/product';


//Fontawesome
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @ViewChild(ItemAddComponent) itemAdd: ItemAddComponent;

  items: Product[];
  filteredItems: Product[];
  faPlus = faPlus;

  constructor(private productsService: ProductsService) {

    //Track items array changes using angular data streams
    this.productsService.allProducts$.subscribe(
      products=>{
        this.items=products;
        this.filteredItems = Object.assign([], this.items);
        console.log(this.items);
      }
    );

  }

  ngOnInit() {

    this.items = this.productsService.getProducts();
    this.filteredItems = Object.assign([], this.items);
    console.log(this.items);
    
  }

  open(){
    this.itemAdd.show();
  }

  filter(itemName: string){
    
    if(!itemName){
      this.filteredItems = Object.assign([], this.items);
    }else{
      
      this.filteredItems = Object.assign([], this.items)
                                  .filter( item => item.name.toLowerCase().indexOf(itemName.toLowerCase())> -1);
      console.log(this.filteredItems);
    }
  }


}
