import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Product } from './../../../../models/product/product';

import { DisplayDirective } from 'src/app/shared/directives/display/display.directive';

@Component({
  selector: 'item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  imagePreview: string;
  displayed: boolean;

  constructor() { }

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

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
