import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display/display.directive';

import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  @Input() items: Product[];
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;
  @ViewChildren('categoryCheckboxes') categoryCheckboxes: QueryList<ElementRef>;

  newItem: Product;
  newItemCategories: string[];
  itemImageName: string;
  categories: string[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.categories = ["Supermarket", "Mobile & Tablets", "Electronics", "Home", "Applicances", "Toys"];
    this.newItem = new Product("");
    this.newItemCategories=[];
    this.itemImageName = "";
  }

  add(){
    
    let categories = "";
    let date = Date.now();
    this.newItemCategories.forEach(cat => {categories+=cat[0]});
    
    let sku = this.newItem.price + '-' + categories + '-' + date;
    this.newItem.sku = sku;
    this.newItem.date = date;
    this.newItem.categories = this.newItemCategories;

    /**
     * Note that we don't have to update the stream after adding the new item
     * because the items array references the parent items array
     */
    this.items.push(this.newItem);

    this.productsService.updateStream(this.items);

    this.categoryCheckboxes.forEach(checkbox => {
      checkbox.nativeElement.checked = false;
    });

    this.newItem = new Product("");
    this.newItemCategories = [];
    this.itemImageName = "";

    this.close();
  }

  setImage(event){
    // console.log(event.target.files[0]);
    this.newItem.image = event.target.files[0];
  }

  addCategory(category: string, event){

    if(this.newItemCategories){
        let index = this.newItemCategories.indexOf(category);

        if(index>=0){
          this.newItemCategories.splice(index,1);
          event.srcElement.checked = false;
        }else{
          this.newItemCategories.push(category);
          event.srcElement.checked = true;
        }

        
      }
      
  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }
}
