import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, Observable, publish, refCount, share, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-hot-observables-subscribe',
  standalone: true,
  imports: [],
  templateUrl: './hot-observables-subscribe.component.html',
  styleUrls: ['./hot-observables-subscribe.component.css']
})
export class HotObservablesSubscribeComponent implements OnInit {

  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  myObservable: Observable<number> = new Observable<number>();

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable<number>(
      (subscriber: Subscriber<number>) => {
        let i = 0;
        console.log('%c Observable Created', 'backgroud-color: #cccccc; color: #ff0000')
        const interval = setInterval(() => {
          i++;
          console.log('%c i = ' + i + ' Observable Created', 'backgroud-color: #cccccc; color: #dedeff');
          if (i === 100) {
            subscriber.complete();
          } else {
            subscriber.next(i);
          }
        }, 1000);

        return () => clearInterval(interval);
      }
    );
  }

  usingSubject() {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);

    this.s1 = 'Waiting for interval...';
    setTimeout(() => {
      subject.subscribe((n) => {
        this.n1 = n;
        this.s1 = 'Ok';
      });
    }, 2000);

    this.s2 = 'Waiting for interval...';
    setTimeout(() => {
      subject.subscribe((n) => {
        this.n2 = n;
        this.s2 = 'Ok';
      });
    }, 4000);
  }

  usingPublish() {
    // const multiCasted = this.myObservable.pipe(publish(), refCount());

    const multiCasted: ConnectableObservable<number> = this.myObservable.pipe(publish()) as ConnectableObservable<number>;
    multiCasted.connect();

    this.s1 = 'Waiting for interval...';

    setTimeout(() => {
      multiCasted.subscribe((n) => {
        this.n1 = n;
        this.s1 = 'Ok';
      });
    }, 2000);

    this.s2 = 'Waiting for interval...';
    setTimeout(() => {
      multiCasted.subscribe((n) => {
        this.n2 = n;
        this.s2 = 'Ok';
      });
    }, 4000);
  }

  usingShare() {

    const multiCasted = this.myObservable.pipe(share());

    this.s1 = 'Waiting for interval...';

    setTimeout(() => {
      multiCasted.subscribe((n) => {
        this.n1 = n;
        this.s1 = 'Ok';
      });
    }, 2000);

    this.s2 = 'Waiting for interval...';
    setTimeout(() => {
      multiCasted.subscribe((n) => {
        this.n2 = n;
        this.s2 = 'Ok';
      });
    }, 4000);

  }

}
