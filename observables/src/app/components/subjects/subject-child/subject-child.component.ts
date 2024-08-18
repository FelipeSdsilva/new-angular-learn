import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MaterialModules } from '../../../material.modules';
import { DataModel } from '../../../model/data.model';

@Component({
  selector: 'app-subject-child',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './subject-child.component.html',
  styleUrl: './subject-child.component.css'
})
export class SubjectChildComponent implements OnInit {

  @Input() subject: Subject<any> = new Subject<any>();
  @Input() name: string = '';

  log: string[] = [];
  connected: boolean = false;
  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  logData(data: DataModel) {
    this.log.push("Timestamp: " + data.timestamp + "\nData: " + data.data);
  }

  connect() {
    this.log.push('Connected')
    this.connected = true;
    this.subscription = this.subject.subscribe(
      (data: DataModel) => { this.logData(data) },
      (error) => { this.connected = false },
      () => { this.connected = false; this.log.push('Finished!') }
    );

  }

  disconnect() {
    this.subscription.unsubscribe();
    this.connected = false;
    this.log.push('Disconnected');
  }

}
