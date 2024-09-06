import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-controll',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-controll.component.html',
  styleUrl: './form-controll.component.css'
})
export class FormControllComponent {

  firstName = new FormControl('');
  lastName = new FormControl('');

  constructor() {
  }

  ngOnInit() {
    console.log(
      this.firstName.value
    );
  }

  setFirstName() {
    this.firstName.setValue('Felipe');
    console.log(this.firstName.value);
  }

}
