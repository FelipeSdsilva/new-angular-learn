import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  getProductsPaginated(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`)
  }

  getProductsListed(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products/list`)
  }

  getProductsError(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products/`)
  }

  getProductPerId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${id}`)
  }

  postNewProduct(produc: Product) {
    return this.http.post(`${this.url}/products`, produc);
  }
  putProductPerId(id: number, produc: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/products/${id}`, produc);
  }

  deleteProductPerId(id: number) {
    return this.http.delete(`${this.url}/products/${id}`);
  }
}
