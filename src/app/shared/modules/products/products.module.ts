import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsListComponent } from './items-list/items-list.component';

import { DisplayDirective } from '../../directives/display/display.directive';
import { SelectControlDirective } from './../../directives/select-control/select-control.directive';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';



@NgModule({
  declarations: [
    ItemComponent,
    ItemViewComponent,
    ItemsListComponent,
    DisplayDirective,
    SelectControlDirective,
    ItemUpdateComponent,
    ItemAddComponent,
    ItemDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductsModule { }
