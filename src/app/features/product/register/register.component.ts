import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  id!: string;
  product!: Product;
  route: string = '';
  isNewProduct: boolean = false;
  pageTitle: string = '';

  formRegisterProduct!: FormGroup;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path

    this.createForm();
    
    if(this.route === 'edit-product') {
      this.id = this.activatedRoute.snapshot.url[1].path
      this.productService.getProductById(this.id).subscribe((product: Product) => {
        this.product = product
        this.pageTitle = 'Edit Product'
        this.formRegisterProduct.controls['name'].setValue(this.product.name)
        this.formRegisterProduct.controls['description'].setValue(this.product.description)        
        this.formRegisterProduct.controls['price'].setValue(this.product.price)
        this.formRegisterProduct.controls['stock'].setValue(this.product.stock)
      })      
    } else {
      this.isNewProduct = true;
      this.pageTitle = 'New Product'
    }    
  }

  createForm() {
    this.formRegisterProduct = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: [0, Validators.required],
    })
  }

  saveProduct() {
    const productToSave: Product = {
      id: this.id,
      name: this.formRegisterProduct.controls['name'].value,
      description: this.formRegisterProduct.controls['description'].value,
      price: this.formRegisterProduct.controls['price'].value,
      stock: this.formRegisterProduct.controls['stock'].value,
    }

    console.log(this.formRegisterProduct.getRawValue())

    if (this.isNewProduct) {
      this.createProduct(productToSave)
    } else {
      productToSave.imageUrl = this.product.imageUrl
      this.updateProduct(productToSave)
    }
  }

  updateProduct(productToSave: Product) {
    this.productService.updateProduct(productToSave).subscribe(response => {
      this.router.navigate(['product', 'list'])
    })
  }

  createProduct(productToSave: Product) {
    this.productService.createProduct(productToSave).subscribe(response => {
      this.router.navigate(['product', 'list'])
    })
  }
}
