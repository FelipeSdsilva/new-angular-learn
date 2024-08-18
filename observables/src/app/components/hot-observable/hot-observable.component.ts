import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observable',
  standalone: true,
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.css']
})
export class HotObservableComponent implements OnInit, OnDestroy {

  @ViewChild('myButton', { static: true }) button!: ElementRef;

  n1: number = 0;
  n2: number = 0;
  private subscriptions: Subscription = new Subscription();
s1: any;
s2: any;

  constructor() { }

  ngOnInit(): void {
    // Criando o hot observable a partir de um intervalo
    const myHotObservable = new Observable<number>(observer => {
      let counter = 0;
      const intervalId = setInterval(() => {
        counter++;
        observer.next(counter);
        if (counter >= 10) { // Limitar o número de emissões para evitar travamento
          observer.complete();
          clearInterval(intervalId);
        }
      }, 1000);

      // Cleanup logic
      return () => {
        clearInterval(intervalId);
      };
    });

    // Assinatura 1
    this.subscriptions.add(
      myHotObservable.subscribe(value => {
        console.log('Assinatura 1:', value);
        this.n1 = value;
      })
    );

    // Assinatura 2 com atraso de 3 segundos
    setTimeout(() => {
      this.subscriptions.add(
        myHotObservable.subscribe(value => {
          console.log('Assinatura 2:', value);
          this.n2 = value;
        })
      );
    }, 3000);

    // Evento de clique do botão
    const buttonClick$ = fromEvent(this.button.nativeElement, 'click');
    this.subscriptions.add(
      buttonClick$.subscribe(() => {
        console.log('Button clicked');
      })
    );
  }

  ngOnDestroy(): void {
    // Limpar todas as assinaturas ao destruir o componente
    this.subscriptions.unsubscribe();
  }
}
