import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Department } from './department';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor() { }
}
