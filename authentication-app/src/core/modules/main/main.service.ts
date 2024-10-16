import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Person } from '../../models/person';
import { Product } from '../../models/product';
import { Page } from '../../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly url = `http://localhost:8080`

  constructor(private http: HttpClient) { }

  getPeoples(page: number, size: number): Observable<Page> {
    return this.http.get<Page>(`${this.url}/users?page=${page}&size=${size}`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }

  getProducts(): Observable<Page> {
    return this.http.get<Page>(`${this.url}/products`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
  }
}
