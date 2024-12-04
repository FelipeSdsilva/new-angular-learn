import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../core/models/person.model';
import { MaterialModules } from '../../core/modules/angular-material/material.module';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
   MaterialModules,
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  @Input()
  person: Person = {
    id: '',
    name: '',
    age: 0,
    address: '',
    city: '',
    country: ''
  };

  @Output()
  delete: EventEmitter<Person> = new EventEmitter<Person>();
  
  @Output()
  update: EventEmitter<Person> = new EventEmitter<Person>();

}
