import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { fromEvent, interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {


  subscriptionsAreActive: boolean = false;
  subscriptions: Subscription[] = [];
  unsubscribeAll$: Subject<void> = new Subject;

  constructor() { }

  ngOnInit() {
    this.checkSubscriptions();

  }

  checkSubscriptions() {
    interval(100).subscribe(() => {
      let active = false;
      this.subscriptions.forEach((s) => {
        if (!s.closed)
          active = true;
      });

      this.subscriptionsAreActive = active;
    });
  }

  subscribe() {

    const subs1 = interval(100)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(i => console.log(i));

    const subs2 = fromEvent(document, 'mousemove')
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(i => console.log(i));

    this.subscriptions.push(subs1);
    this.subscriptions.push(subs2);
  }

  unsubscriber(): void {
    this.unsubscribeAll$.next();
  }

  ngOnDestroy(): void {
    // Completa o Subject para finalizar todos os Observables
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();

    // Limpa todas as assinaturas
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
