import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-child',
  standalone: true,
  imports: [
    TimerComponent,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {

  @ViewChild(TimerComponent)
  private myTime: TimerComponent;

  @ViewChild('myP') myP!: ElementRef;


  constructor() {
    this.myTime = new TimerComponent;
  }


  start() {
    this.myTime.start();
  }

  stop() {
    this.myTime.stop();
  }

  clear() {
    this.myTime.clear();
  }

  ngAfterViewInit(): void {
    console.log(this.myP);
  }

}
