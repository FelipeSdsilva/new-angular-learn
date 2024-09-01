import { Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { Person } from '../../../../models/person.model';
import { debounce, debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, of, switchAll, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-switch-merge',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './switch-merge.component.html',
  styleUrl: './switch-merge.component.css'
})
export class SwitchMergeComponent {

  searchInput: string = '';
  peoples$!: Observable<Person[]>;

  @ViewChild('searchBy', { static: false }) searchBy!: ElementRef;

  constructor(private http: HttpClient) {
  }


  readOnly: string = 'http://localhost:8080'

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.firstOption();
    // this.secondOption();
    this.thridOption();
  }

  filterPeople(searchInput: string): Observable<Person[]> {
    if (searchInput.length === 0)
      return of([]);
    return this.http.get<Person[]>(`${this.readOnly}/persons?name=${searchInput}`);
  }

  firstOption() {
    fromEvent<KeyboardEvent>(this.searchBy.nativeElement, 'keyup')
      .subscribe((event: KeyboardEvent) => {
        this.filterPeople(this.searchInput)
          .subscribe((e) => console.log(e))
        console.log(event);
      });
  }

  secondOption() {
    let keyup$ = fromEvent<KeyboardEvent>(this.searchBy.nativeElement, 'keyup');

    // let fetch$ = keyup$.pipe(map(e => this.filterPeople(this.searchInput)));

    // this.peoples$ = fetch$.pipe(mergeAll());

    this.peoples$ = keyup$.pipe(mergeMap(e => this.filterPeople(this.searchInput)));

  }

  thridOption() {
    let keyup$ = fromEvent<KeyboardEvent>(this.searchBy.nativeElement, 'keyup');

    // this.peoples$ = keyup$
    //   .pipe(map(e => this.filterPeople(this.searchInput)))
    //   .pipe(switchAll());

    this.peoples$ = keyup$.pipe(
      debounceTime(700),
      switchMap(() => this.filterPeople(this.searchInput)));
  }
}
