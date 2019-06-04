import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Product } from './../../../../models/product/product';

import { DisplayDirective } from 'src/app/shared/directives/display.directive';

@Component({
  selector: 'item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  displayed: boolean;

  constructor() { }

  ngOnInit() {

    this.displayed = true;

  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
