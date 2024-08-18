import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { GenRandomDataService } from '../../services/gen-random-data.service';
import { DataModel } from '../../model/data.model';
import { SubjectChildComponent } from "./subject-child/subject-child.component";

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [SubjectChildComponent],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {


  subject: Subject<DataModel> = new Subject<DataModel>();
  replaySubject: ReplaySubject<DataModel> = new ReplaySubject<DataModel>();
  asyncSubject: AsyncSubject<DataModel> = new AsyncSubject<DataModel>();
  behaviorSubject: BehaviorSubject<DataModel> = new BehaviorSubject<DataModel>({ timestamp: 0, data: 0 });

  constructor(private dataService: GenRandomDataService) { }

  ngOnInit(): void {
    this.dataService.dataSubject.subscribe(this.subject);
    this.dataService.dataSubject.subscribe(this.replaySubject);
    this.dataService.dataSubject.subscribe(this.asyncSubject);
    this.dataService.dataSubject.subscribe(this.behaviorSubject);
  }


  connect() {
    this.dataService.connect();
  }

}
