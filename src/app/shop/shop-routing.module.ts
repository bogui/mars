import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: 'shop',
    children: [
      { path: '', component: ShopComponent },
      {
        path: 'category',
        component: CategoryComponent,
      },
      { path: 'category/:slug', component: CategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
