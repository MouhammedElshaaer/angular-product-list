import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';

import { DisplayDirective } from '../../directives/display.directive';



@NgModule({
  declarations: [
    ItemComponent,
    ItemViewComponent,
    ItemsListComponent,
    DisplayDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
