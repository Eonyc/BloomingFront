import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';

const routes: Routes = [
  {
    path: "product-by-category",
    component: ProductByCategoryComponent
  },

  {
    path: "product-by-brand",
    component: ProductsByBrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
