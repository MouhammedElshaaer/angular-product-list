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
  @Input() items: Product[];
  @ViewChild(ItemViewComponent) itemView: ItemViewComponent;
  @ViewChild(ItemUpdateComponent) itemUpdate: ItemUpdateComponent;
  @ViewChild(ItemDeleteComponent) itemDelete: ItemDeleteComponent;

  imagePreview: string;

  constructor() {}

  ngOnInit() {

    if(this.item.image){

      const reader = new FileReader();
      reader.onload = () => {
        /**
         * Since reader.result may return string | ArrayBuffer, it does
         * not implicitly cast to string to avoid data loss(truncation).
         * So, we cast the returned value to string
         */
        this.imagePreview = reader.result as string;
      };

      reader.readAsDataURL(this.item.image);
      
    }
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
