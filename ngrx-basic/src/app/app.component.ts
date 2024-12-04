import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { faker } from '@faker-js/faker';
import { AppState } from '../core/store';
import { Component } from '@angular/core';
import { Person } from '../core/models/person.model';
import { PersonComponent } from "./person/person.component";
import * as fromPersonSelectors from '../core/store/persons.selectors';
import { PrimeNgModule } from '../core/modules/prime-ng/prime-ng.module';
import { MaterialModules } from '../core/modules/angular-material/material.module';
import { PersonAll, PersonDelete, PersonNew, PersonUpdate } from '../core/store/person.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModules,
    PrimeNgModule,
    PersonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  peoples$: Observable<Person[]> = new Observable;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(PersonAll());
    // this.peoples$ = this.store.pipe(select('people'));
    this.peoples$ = this.store.select(fromPersonSelectors.selectAllPeople);
  }

  addNew() {
    const person: Person = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 100 }),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    };

    this.store.dispatch(PersonNew({ person }));
  }

  update(p: Person) {

    const updatedPerson: Person = {
      ...p,
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 100 }),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country()
    };

    this.store.dispatch(PersonUpdate({ person: updatedPerson }))
  }

  delete(p: Person) {
    const idP = p.id ?? '';
    console.log(idP);

    this.store.dispatch(PersonDelete({ id: idP }))
  }
}
