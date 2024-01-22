import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, Products } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products!: Products;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products
      console.log(this.products)
    })
  }

  selectProduct(product: Product) {
    this.router.navigate(['product', 'edit-product', product.id])
  }
  
  createNewProduct() {
    this.router.navigate(['product', 'new-product'])    
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id)
    .subscribe(response => {
      this.router.navigate(['product'])    
    })
  }
}
