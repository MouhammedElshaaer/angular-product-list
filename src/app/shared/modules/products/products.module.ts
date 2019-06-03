import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ListComponent } from './list/list.component';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [ItemComponent, ItemViewComponent, ListComponent, ItemsListComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
