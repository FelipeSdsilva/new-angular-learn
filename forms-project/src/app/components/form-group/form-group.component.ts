import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {

  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }

  ngOnInit() { }

  submit() {
    console.log(this.clientForm.value);

  }
}
