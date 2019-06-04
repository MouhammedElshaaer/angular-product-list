import { DisplayDirective } from 'src/app/shared/directives/display.directive';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Component({
  selector: 'item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  @Input() item: Product;
  @ViewChild(DisplayDirective) displayControl:DisplayDirective;

  constructor() { }

  ngOnInit() {
  }

  update(){
    console.log(this.item)
  }

  close(){
    this.displayControl.hide();
  }

  show(){
    this.displayControl.show();
  }

}
