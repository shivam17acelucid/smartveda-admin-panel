import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './banner/add-edit-category/add-edit-category.component';
import { AddEditSubcategoryComponent } from './banner/add-edit-subcategory/add-edit-subcategory.component';
import { CategoryComponent } from './banner/category/category.component';
import { SubCategoryComponent } from './banner/sub-category/sub-category.component';
import { SponsorComponent } from './banner/sponsor/sponsor.component';
import {AddEditSponsorComponent} from './banner/add-edit-sponsor/add-edit-sponsor.component';
import { Slider1Component } from './slider/slider1/slider1.component';
const routes: Routes = [
  {
    path:'category', component: CategoryComponent
  },
  {
    path: 'subcategory', component: SubCategoryComponent
  },
  {
    path: 'sponsor', component: SponsorComponent
  },
  {
    path:'editcategory', component: AddEditCategoryComponent
  },
  {
    path: 'editsubcategory', component: AddEditSubcategoryComponent
  },
  {
    path: 'editsponsor', component: AddEditSponsorComponent
  },
  {
    path:'addcategory', component: AddEditCategoryComponent
  },
  {
    path: 'addsubcategory', component: AddEditSubcategoryComponent
  },
  {
    path: 'addsponsor', component: AddEditSponsorComponent
  },
  {
    path: 'slider', component: Slider1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
