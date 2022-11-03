import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  id: any
  title: string = " "
  editMode: boolean = false
  productCategoryForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ProductService: ProductService
  ) {
    this.productCategoryForm = this.fb.group({
      name : ["", [Validators.required]],
      image: ["", [Validators.required]],
      parentCategoryName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      metaTitle: ['',[Validators.required]],
      metaDescription: ['',[Validators.required]],
      metaKeyword: ['',[Validators.required]],
      status: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Category"
        this.getProductCategoryById()
      } else {
        this.editMode = false
        this.title = "Add New category"
      }
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  addProductCategory() {
    this.ProductService.addProduct(this.productCategoryForm.value).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category added successfully", "Product Added")
        this.ngxLoader.stop()
        this.route.navigate(['/product/category'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  
  getProductCategoryById() {
    this.ProductService.getCategoryById(parseInt(this.id)).subscribe((res: any) => {
      this.productCategoryForm.patchValue({
        name: res.categoryName,
        parentCategoryName: res.parent_category.name,
        status: res.status,
        image: res.image,
        description: res.description,
        images: res.images,
        metaTitle: res.meta_description.meta_title,
        metaDescription: res.meta_description.meta_description,
        metaKeyword: res.meta_description.meta_keyword,
      })
      console.log(this.productCategoryForm.value)
      this.ngxLoader.stop();
    })
  }

  editProductCategory() {
    this.ProductService.editProduct(this.productCategoryForm.value, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product edit successfully", "Product edit")
        this.ngxLoader.stop()
        this.route.navigate(['/product/categorylist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  submitForm() {
    this.ngxLoader.start();
    if (this.editMode) {
      this.editProductCategory()
    } else {
      this.addProductCategory()
    }
}
}