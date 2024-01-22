import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';

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

  name: string = '';
  description: string = '';
  price: string = '';  
  stock: number = 0;
  
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route = this.activatedRoute.snapshot.url[0].path
    
    if(this.route === 'edit-product') {
      this.id = this.activatedRoute.snapshot.url[1].path
      this.productService.getProductById(this.id).subscribe((product: Product) => {
        this.product = product
        this.name = this.product.name      
        this.description = this.product.description
        this.price = this.product.price
        this.stock = this.product.stock
        this.pageTitle = 'Edit Product'
      })      
    }

    this.isNewProduct = true;
    this.pageTitle = 'New Product'
    
  }

  saveProduct() {
    const productToSave: Product = {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      stock: this.stock
    }
    
    if (this.isNewProduct) {
      this.createProduct(productToSave)
    }

    productToSave.imageUrl = this.product.imageUrl
    this.updateProduct(productToSave)
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
