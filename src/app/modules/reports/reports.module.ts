import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ProductsByBrandComponent } from './products-by-brand/products-by-brand.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';


@NgModule({
  declarations: [
    ProductsByBrandComponent,
    ProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
