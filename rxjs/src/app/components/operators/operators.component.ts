import { Component, ViewChild } from '@angular/core';
import { debounceTime, delay, filter, first, from, fromEvent, interval, last, map, Observable, Subject, Subscription, take, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { MaterialModules } from '../../../../modules/material.modules';
import { MatRipple } from '@angular/material/core';
import { time } from 'console';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [
    MaterialModules
  ],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {



  @ViewChild(MatRipple) ripple!: MatRipple;

  searchInput: string = '';
  ripplerBool: boolean = true;
  ripplerRadius: number = 40;

  ngOnInit() {
  }

  mapClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        map(i => 2 * i),
        map(i => "Number: " + i),
        delay(2000)
      )
      .subscribe(i => console.log(i));

    fromEvent(document, 'click')
      .pipe(map((e: MouseEventInit) => console.log({ x: e.clientX, y: e.clientY })))
      .subscribe((pos) => console.log(pos))
  }

  filterClick() {
    from([1, 2, 3, 4, 5, 6, 7])
      .pipe(
        filter(i => i % 2 === 1)
      )
      .subscribe(i => console.log(i));

    interval(1000)
      .pipe(
        filter(i => i % 2 === 0),
        map(i => "Value: " + i),
        delay(1000)
      ).subscribe(i => console.log(i));
  }

  tapClick() {
    interval(1000)
      .pipe(
        tap(i => console.log(i)),
        tap(i => console.warn("Before filter: ", i)),
        filter(i => i % 2 === 0),
        tap(i => console.warn("After filter: ", i)),
        map(i => "Value: " + i),
        tap(i => console.warn("After map: ", i)),
        delay(1000)
      ).subscribe(i => console.log(i));
  }

  takeClick() {
    const observable = new Observable(
      (observer) => {
        for (let i = 0; i < 20; i++) {
          setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100);
          setTimeout(() => observer.complete(), i * 100)
        }
      });

    const sub: Subscription = observable
      .pipe(
        tap(i => console.log(i)),
        // take(20)
        first()
        // last()
      )
      .subscribe(
        v => console.log("Output: ", v),
        (error) => console.log(error),
        () => console.log("Complete"));

    const interval = setInterval(() => {
      console.log('Checking...');
      if (sub.closed) {
        console.log('Subscription CLOSED!');
        clearInterval(interval);
      }

    }, 2000);
  }

  debounceTimeClick() {
    fromEvent(document, 'click')
      .pipe(
        tap((e) => console.log(e)),
        debounceTime(1000),
      )
      .subscribe(
        (e: MouseEventInit) => {
          console.log('Click with debounceTime: ', e);
          this.launchRipple()
        }
      )
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    })
    rippleRef.fadeOut();
  }

  searchEntry$: Subject<string> = new Subject<string>();

  searchByUsingDebounce(e: any) {
    this.searchEntry$.next(this.searchInput);
  }

  debounceSearch() {
    this.searchEntry$
      .pipe(debounceTime(1000))
      .subscribe(e => console.log(e));
  }

  takeWhileClick() {
    interval(500)
      .pipe(takeWhile((value, index) => value < 5))
      .subscribe(
        e => console.log('takeWhile: ', e),
        (error) => console.log(error),
        () => console.log('Completed!')
      );
  }

  takeUntilSearch() {

    let doTime$ = timer(5000);

    interval(500)
      .pipe(takeUntil(doTime$))
      .subscribe(
        e => console.log('takeWhile: ', e),
        (error) => console.log(error),
        () => console.log('Completed!')
      );
  }
}
