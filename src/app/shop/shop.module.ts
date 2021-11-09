import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [ShopComponent, CategoryComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
