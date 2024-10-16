import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../models/user';
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from '../../utils/system';
import { log } from 'console';
import qs from 'qs';
import { StorageService } from './storege.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subjUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>({
    id: 0,
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    mobilephone: '',
    email: '',
    access_token: ''
  });
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private storageService: StorageService) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${BASE_URL}/persons`, user);
  }

  login(credentials: { username: string, password: string }): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    });

    const body = qs.stringify({
      username: credentials.username,
      password: credentials.password,
      grant_type: 'password',
    });

    return this.http
      .post<User>(`${BASE_URL}/oauth2/token`, body, { headers })
      .pipe(
        tap((u: User) => {
          localStorage.setItem('token', u.access_token);
          this.subjLoggedIn$.next(true);
          this.subjUser$.next(u);
        })
      )
  }
  isAuthenticated(): Observable<boolean> {
    const token = this.storageService.getItem('token');
    if (token && !this.subjLoggedIn$.value) {
      return this.checkTokenValidation();
    }

    return this.subjLoggedIn$.asObservable();
  }


  checkTokenValidation(): Observable<boolean> {
    return this.http
      .get<User>(`${BASE_URL}/user`)
      .pipe(
        tap((u: User) => {
          if (u) {
            localStorage.setItem('token', u.access_token);
            this.subjLoggedIn$.next(true);
            this.subjUser$.next(u);
          }
        }),
        map((u: User) => (u) ? true : false),
        catchError((err) => {
          this.logout();
          return of(false);
        })
      );
  }

  getUser(): Observable<User | null> {
    console.log(this.subjUser$.asObservable())
    return this.subjUser$.asObservable();
  }

  logout() {
    this.storageService.removeItem('token');
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }
}
