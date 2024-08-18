import { Injectable } from '@angular/core';
import { DataModel } from '../model/data.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {
  public dataSubject: Subject<DataModel> = new Subject<DataModel>();

  constructor() {
  }

  connect() {
    let n = 0;
    console.log('Data generation started');

    let f = () => {
      n++;
      console.log(n);

      if (n <= 10) {
        let timestamp = Math.round(Math.random() * (2000 + 500));
        this.dataSubject.next({ timestamp: timestamp, data: n });
        setTimeout(f, timestamp);
      } else {
        this.dataSubject.complete();
      }
    }

    f();
  }
}
