import { Component } from '@angular/core';
import { Person } from '../../core/models/person.model';
import { Observable } from 'rxjs';
import { MainService } from '../../core/services/main/main.service';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  people$: Observable<Person[]> = new Observable;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getPeople().then(peoples => this.people$ = peoples);
  }

  addOne() {
    const person: Person = {
      
    }
  }
}
