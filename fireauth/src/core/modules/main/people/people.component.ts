import { Observable } from 'rxjs';
import { faker } from '@faker-js/faker';
import { Component } from '@angular/core';
import { Person } from '../../../models/person.model';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MaterialModules } from '../../angular-material/material.module';
import { MainService } from '../../../services/main/main.service';

@Component({
  selector: 'app-people',
  imports: [
    PrimeNgModule,
    MaterialModules,
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  people$: Observable<Person[]> = new Observable;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.people$ = this.mainService.getPeople();
  }

  addOne() {
    const person: Person = {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 100 }),
      country: faker.location.country(),
      email: faker.internet.email(),
      company: faker.company.name(),
    }
    this.mainService.addPerson(person);
  }

  generate() {
    for (let index = 0; index < 5; index++) {
      this.addOne();
    }
  }
}
