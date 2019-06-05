import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DisplayDirective } from 'src/app/shared/directives/display/display.directive';

import { Product } from 'src/app/models/product/product';

import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.scss']
})
export class ItemDeleteComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  items: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.items = this.productsService.getProducts();
  }

  delete(){

    let deletionIndex: number = -1;
    this.items.forEach( (item, i) => item.name == this.item.name? deletionIndex=i: null);
    deletionIndex >= 0? this.items.splice(deletionIndex, 1): null;

    //updating the stream with the new version of the products array
    this.productsService.updateStream(this.items);

    /**
     * we don't need to close explicitly because when updating
     * the stream the affected parent component re-renders
     */
    // this.close()
  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
