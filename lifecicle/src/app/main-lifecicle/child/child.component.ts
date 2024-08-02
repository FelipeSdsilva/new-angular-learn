import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildChildComponent } from "./child-child/child-child.component";

export interface LifeCicleEvent {
  id: number,
  name: string,
  color: string,
}


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ChildChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {



  @Input() name!: string;
  @Input() age: number = 0;
  @Input() food: string = '';

  private intervalRef;
  eventId: number = 0;
  events: LifeCicleEvent[] = [];
  colors: string[] = ['primary', 'warn', 'accent'];

  constructor() {
    console.log(this.name + ' constructor');
    this.newEvent("constructor!");
    this.intervalRef = setInterval(() => {
      console.log('interval')
    }, 2000);
  }

  ngOnInit() {
    console.log(this.name + ' ngOnInit');
    this.newEvent("ngOnInit!");
  }

  ngOnDestroy(): void {
    console.log(this.name + ' ngOnDestroy');
    this.newEvent('ngOnDestroy!');
    clearInterval(this.intervalRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(changes + ' ngOnChanges');
    this.newEvent('ngOnChanges!');
  }

  ngAfterContentInit() {
    console.log(this.name + ' ngAfterContentInit');
    this.newEvent('ngAfterContentInit!');
  }

  ngAfterViewInit() {
    console.log(this.name + ' ngAfterViewInit');
    this.newEvent('ngAfterViewInit!');
  }

  newEvent(name: string) {
    let id = this.eventId += 1;
    this.events.push(
      {
        id: id,
        color: this.colors[id % this.colors.length],
        name: name,
      }
    )
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000)
  }
}
