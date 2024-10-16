import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Page } from '../models/pagination';
import { Person } from '../models/person';
import { Product } from '../models/product';
import { BASE_URL } from '../../utils/system';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getPeoples(): Observable<Person[]> {
    return this.http.get<Person[]>(`${BASE_URL}/persons`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }
}
