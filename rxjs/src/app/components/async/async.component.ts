import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { delay, map, Observable, Observer, of, pipe, toArray } from 'rxjs';
import { subscribe } from 'node:diagnostics_channel';


interface User {
  login: string,
  name: string
}

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent {

  options$!: Observable<string[]>;
  user$!: Observable<User>;

  constructor() {
  }


  ngOnInit() {
    // this.options$ = Observable.create(
    //   (observer: Observer<string>) => {
    //     for (let index = 0; index < 10; index++) {
    //       observer.next(`This is my ${index}th option.`);
    //     }
    //   }
    // );
    // pipe(
    //   map(s => s + '!'),
    //   toArray(),
    //   delay(2000)
    // );

    // this.options$.subscribe(s => console.log(s));

    this.options$ = of(...Array(10).keys())
      .pipe(
        map(index => `This is my ${index}th option`),
        map(s => s + '!'),
        toArray(),
        delay(2000)
      );

    this.user$ = new Observable<User>((observer) => {
      let names = ['Mr. James', 'Mr. John', 'Mr. Ray', 'Ms. Angel'];
      let logins = ['James', 'John', 'Ray', 'Angel'];

      let i = 0;

      setInterval(() => {
        if (i == 4)
          observer.complete();
        else
          observer.next({ login: logins[i], name: names[i] });

        i++;
      }, 2000);
    })

    this.user$.subscribe(s => console.log(s));
  }

}
