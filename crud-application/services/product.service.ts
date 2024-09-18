import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject, combineLatest, filter, map, Observable, tap } from 'rxjs';
import { Department } from '../models/department.model ';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:8080/products';
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private loaded: boolean = false;

  constructor(
    private http: HttpClient,
    private deparmentService: DepartmentService) { }

  get(): Observable<Product[]> {
    if (!this.loaded) {
      combineLatest(
        this.http.get<Product[]>(this.url),
        this.deparmentService.get())
        .pipe(
          tap(([products, departments]) => console.log(products, departments)),
          filter(([products, departments]) => products != null && departments != null),
          map(([products, departments]) => {
            for (let p of products) {
              let ids = (p.departments);
              // p.departments = ids.map((depat) => departments.find(dep => dep.id == depat.id));
            }
            return products;
          }),
          tap((products) => console.log(products))
        )
        .subscribe(this.productsSubject$);

      this.loaded = true;
    }
    return this.productsSubject$.asObservable();
  }

  add(prod: Product): Observable<Product> {
    let departments = (prod.departments as Department[]).map(d => d.id);
    return this.http.post<Product>(this.url, { ...prod, departments })
      .pipe(
        tap((p) => {
          this.productsSubject$.getValue()
            .push({ ...prod, id: p.id })
        })
      )
  }

  del(prod: Product): Observable<any> {
    return this.http.delete(`${this.url}/${prod.id}`)
      .pipe(
        tap(() => {
          let products = this.productsSubject$.getValue();
          let i = products.findIndex(p => p.id === prod.id);
          if (i >= 0)
            products.splice(i, 1);
        })
      )
  }

  update(prod: Product): Observable<Product> {
    let departments = (prod.departments as Department[]).map(d => d.id);
    return this.http.put<Product>(`${this.url}/${prod.id}`, { ...prod, departments })
      .pipe(
        tap(() => {
          let products = this.productsSubject$.getValue();
          let i = products.findIndex(p => p.id === prod.id);
          if (i >= 0)
            products[i] = prod;
        })
      )
  }

}
