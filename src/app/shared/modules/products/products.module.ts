import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';

import { DisplayDirective } from '../../directives/display.directive';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';



@NgModule({
  declarations: [
    ItemComponent,
    ItemViewComponent,
    ItemsListComponent,
    DisplayDirective,
    ItemUpdateComponent,
    ItemAddComponent,
    ItemDeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
