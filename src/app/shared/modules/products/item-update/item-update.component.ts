import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display/display.directive';

import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  @Input() item: Product;
  @Input() items: Product[];
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  // newItem: Product;
  newItemCategories: string[];
  categories: string[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.categories = ["Supermarket", "Mobile & Tablets", "Electronics", "Home", "Applicances", "Toys"];
    this.newItemCategories=[];
  }

  update(){

    let categories = "";
    let date = Date.now();
    this.item.categories.forEach(cat => {categories+=cat[0]});

    let sku = this.item.price + '-' + categories + '-' + date;
    this.item.sku = sku;
    this.item.date = date;

    /**
     * The following lines of code is to make sure that the
     * reference of the items array is changed to update the view
     */
    this.items = this.items.map(x=>Object.assign({}, x));
    this.productsService.updateStream(this.items);

    this.close();

  }

  setImage(event){
    this.item.image = event.target.files[0];
  }

  addCategory(category: string, event){

    if(this.newItemCategories){
        let index = this.item.categories.indexOf(category);

        if(index>=0){
          this.item.categories.splice(index,1);
          event.srcElement.checked = false;
        }else{
          this.item.categories.push(category);
          event.srcElement.checked = true;
        }

      }
      
  }

  selected(category: string){

    let selected = false

    if(this.item.categories.length > 0){
      let index = this.item.categories.indexOf(category);
      index>=0? selected=true: null;
    }

    return selected;

  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
