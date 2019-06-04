import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display.directive';

import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  @Input() items: Product[];
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  newItem: Product;
  newItemCategories: string[];

  categories: string[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.categories = ["Supermarket", "Mobile & Tablets", "Electronics", "Home", "Applicances", "Toys"];
    this.newItem = new Product("");
    this.newItemCategories=[];
  }

  add(){
    
    let categories = "";
    this.newItemCategories.forEach(cat => {categories+=cat[0]});

    let sku = this.newItem.price + '-' + categories + '-' + Date.now();
    this.newItem.sku = sku;

    this.newItem.categories = this.newItemCategories;

    /**
     * Note that we don't have to update the stream after adding the new item
     * because the items array references the parent items array
     */
    this.items.push(this.newItem);

    console.log(this.items);

    this.newItem = new Product("");
    this.newItemCategories = [];

    this.close();
  }

  setImage(event){
    console.log(event.target.files[0]);
    this.newItem.image = event.target.files[0];
  }

  addCategory(category: string, checked:boolean){
    
    if(checked) {
      this.newItemCategories.push(category);
    } else {
      let index = this.newItemCategories.indexOf(category);
      this.newItemCategories.splice(index,1);
    }

  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }
}
