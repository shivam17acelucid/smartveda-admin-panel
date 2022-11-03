import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module'
@NgModule({
  declarations: [
    ProductListComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
