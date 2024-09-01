import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { from, fromEvent, interval, Observable, observable, Observer, of, Subscription, timer } from 'rxjs';
import e from 'express';

@Component({
  selector: 'app-basic-creation',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './basic-creation.component.html',
  styleUrl: './basic-creation.component.css'
})
export class BasicCreationComponent {


  subscription: Subscription = new Subscription;

  observableCreate() {
    const hello = new Observable((observer: Observer<any>) => {
      observer.next("Hello");
      observer.next("Hello");
      observer.next("Hello");
      observer.complete(); 
    });

    hello.subscribe({
      next: (val: any) => console.log(val),
      complete: () => console.log('Complete')
    });
  }

  fromClick() {
    from([1, 2, 4, 5, 6, 7, 8]).subscribe((v) => {
      console.log(v);
    })
  }

  ofClick() {
    of([1, 2, 4, 5, 6, 7, 8]).subscribe((v) => {
      console.log(v);
    })
  }

  intervalClick() {
    const source = interval(1000);
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription);
  }

  timerClick() {
    const source = timer(3000, 1000);
    const subscription = source.subscribe((v) => console.log(v));
    this.subscription.add(subscription);
  }

  fromEventClick() {
    const subscription = fromEvent(document, 'click').subscribe((e: any) => {
      console.log(e);
    });
    this.subscription.add(subscription);
  }


  unsubscriberClick() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }
}
