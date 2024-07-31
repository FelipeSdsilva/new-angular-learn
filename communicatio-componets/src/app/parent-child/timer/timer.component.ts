import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {

  private miliseconds: number = 0;
  private interval: any;
  running: boolean = false;

  ngOnInit(): void {
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.interval = setInterval(() => {
        this.miliseconds += 50;
      }, 50);
    }
  }

  stop() {
    if (this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear() {
    this.miliseconds = 0
  }

  round(n: number): number {
    return Math.round(n);
  }

  getMiliseconds(): number {
    return this.miliseconds;
  }
}
