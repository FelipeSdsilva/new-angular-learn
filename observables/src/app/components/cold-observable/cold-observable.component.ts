import { Component } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  standalone: true,
  imports: [],
  templateUrl: './cold-observable.component.html',
  styleUrl: './cold-observable.component.css'
})
export class ColdObservableComponent {

  subscription?: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';
  subscription2: Subscription | undefined;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {

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

    setInterval(() => {
      this.subscription2 = myIntervalObservable.subscribe(
        (n) => { this.n2 = n },
        (error) => { this.s2 = "Error: " + error },
        () => { this.s2 = 'completed' }
      );
    }, 3000);



    setTimeout(() => {
      this.subscription?.unsubscribe();
      this.subscription2?.unsubscribe();
    }, 11000);

  }
}
