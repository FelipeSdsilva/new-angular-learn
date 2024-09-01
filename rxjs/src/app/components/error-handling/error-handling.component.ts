import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { catchError, map, Observable, of, pipe, retry, retryWhen, tap, throwError, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [
    MaterialModules
  ],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.css'
})
export class ErrorHandlingComponent {



  constructor() { }

  ngOnInit() { }

  startTest() {
    // let obj: Observable<any> = new Observable<any>((observer) => {
    //   for (let index = 0; index < 10; index++) {
    //     if (index == 7)
    //       observer.error('An error occurred when i = ' + index);
    //     else
    //       observer.next(index);
    //   }
    // })
    // obj
    //   .pipe(
    //     map(i => i * 10),
    //     tap(i => console.log(`Before error handling: ${i}`),
    //       catchError(error => {
    //         console.error(`Insider catchError: ${error}`);
    //         // return of(0);
    //         return throwError('Throw Error: Error');
    //       })
    //     ),
    //     retry(2),
    //     retryWhen(i => timer(5000))
    //   )
    //   .subscribe(
    //     (i) => console.log(`Normal output: ${i}`),
    //     (error) => console.log(error),
    //     () => console.log('Complete!')
    //   )

    // const obj: Observable<number> = new Observable<number>((observer) => {
    //   for (let index = 0; index < 10; index++) {
    //     if (index === 7) {
    //       observer.error(`An error occurred when i = ${index}`);
    //     } else {
    //       observer.next(index);
    //     }
    //   }
    //   observer.complete();
    // });

    // obj
    //   .pipe(
    //     map(i => i * 10),
    //     tap(i => console.log(`Before error handling: ${i}`)),
    //     catchError(error => {
    //       console.error(`Inside catchError: ${error}`);
    //       return throwError(() => new Error('Throw Error: Error'));
    //     }),
    //     retry(2),
    //     retryWhen(() => timer(5000))
    //   )
    //   .subscribe({
    //     next: (i) => console.log(`Normal output: ${i}`),
    //     error: (error) => console.log(`Error: ${error.message}`),
    //     complete: () => console.log('Complete!')
    //   });

    const obj2: Observable<any> = new Observable<any>((observer) => {
      timer(2000).subscribe(n => observer.next(1000));
      timer(2500).subscribe(n => observer.complete());
    });
    obj2
      .pipe(
        timeout(2500)
      )
      .subscribe({
        next: (i) => console.log(`Normal output: ${i}`),
        error: (error) => console.log(`Error: ${error.message}`),
        complete: () => console.log('Complete!')
      });

  }
}
