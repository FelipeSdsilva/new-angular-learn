import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { Client } from '../../../../model/client.modet';

@Component({
  selector: 'app-template-drive-form',
  standalone: true,
  imports: [MaterialModules],
  templateUrl: './template-drive-form.component.html',
  styleUrl: './template-drive-form.component.css'
})
export class TemplateDriveFormComponent {

  client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    email:'',
    birthDate: new Date,
    age: 0,
    gender: '',
    street: '',
    city: '',
    state: '',
    phone1: '',
    phone2: ''
  }

  states: string[] = ['SP', 'PR', 'SC', 'RS', 'PA', 'RO', 'MA', 'RJ']

  constructor() { }

  onSubmit() {
    console.log(this.client);

    this.client = {
      id: 0,
      firstName: '',
      lastName: '',
      email:'',
      birthDate: new Date,
      age: 0,
      gender: '',
      street: '',
      city: '',
      state: '',
      phone1: '',
      phone2: ''
    }
  }
}
