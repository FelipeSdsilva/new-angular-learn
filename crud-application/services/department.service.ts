import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Department } from '../models/department.model ';
import { tap, delay } from 'rxjs/operators';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly url = 'http://localhost:8080/departments';

  private departmentsSubject$: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>([]);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http.get<Department[]>(this.url)
        .pipe(
          tap((deps) => console.log(deps)),
          delay(1000)
        )
        .subscribe(this.departmentsSubject$);
      this.loaded = true;
    }
    return this.departmentsSubject$.asObservable();
  }

  add(d: Department): Observable<Department> {
    return this.http.post<Department>(this.url, d)
      .pipe(
        tap((dep: Department) => this.departmentsSubject$.getValue().push(dep))
      )
  }

  del(dep: Department): Observable<any> {
    return this.http.delete(`${this.url}/${dep.id}`)
      .pipe(
        tap(() => {
          let departments = this.departmentsSubject$.getValue();
          let i = departments.findIndex(d => d.id === dep.id);
          if (i >= 0)
            departments.splice(i, 1);
        }
        ))
  }

  update(dep: Department): Observable<Department> {
    return this.http.patch<Department>(`${this.url}/${dep.id}`, dep)
      .pipe(
        tap((d) => {
          let departments = this.departmentsSubject$.getValue();
          let i = departments.findIndex(d => d.id === dep.id);
          if (i >= 0)
            departments[i].name = d.name;
        })
      )
  }
}
