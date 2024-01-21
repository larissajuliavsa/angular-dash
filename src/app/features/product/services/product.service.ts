import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<Products> {
    return this.http.get<Products>(`${this.baseURL}/products`)
  }

  getProductById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseURL}/products/${id}`)
  }
}
