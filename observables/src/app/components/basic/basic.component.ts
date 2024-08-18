import { Component } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {

  subscription?: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';
  subscription2: Subscription | undefined;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {

    const myFirstObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.next(4)
        observer.next(5)
        observer.error("Here")
        observer.complete();
      }
    );

    myFirstObservable.subscribe(
      (n: number) => console.log(n),
      (error) => console.log(error),
      () => console.log('completed.'));

    // let timerCount = interval(500);
    // timerCount.subscribe(
    //   (n) => console.log(n)
    // );
    // console.log("After interval");

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {

        let number: number = 0;

        let id = setInterval(() => {

          number++;
          console.log("From observable: " + number);

          if (number == 10) {
            observer.complete();
          } else if (number % 2 == 0) {
            observer.next(number);
          }
        }, 1000);

        return () => {
          clearInterval(id)
        };
      }
    );

    this.subscription = myIntervalObservable.subscribe(
      (n) => { this.n1 = n },
      (error) => { this.s1 = "Error: " + error },
      () => { this.s1 = 'completed' }
    );

    this.subscription2 = myIntervalObservable.subscribe(
      (n) => { this.n2 = n },
      (error) => { this.s2 = "Error: " + error },
      () => { this.s2 = 'completed' }
    );

    setTimeout(() => {
      this.subscription?.unsubscribe();
      this.subscription2?.unsubscribe();
    }, 1000);

  }

}
