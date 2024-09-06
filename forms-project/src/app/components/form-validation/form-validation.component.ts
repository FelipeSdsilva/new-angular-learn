import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { Client } from '../../../../model/client.modet';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {

  client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    birthDate: new Date,
    age: 0,
    gender: '',
    street: '',
    city: '',
    state: '',
    phone1: '',
    phone2: ''
  }

  onSubmit() {
    console.log(this.client);
  }
}
