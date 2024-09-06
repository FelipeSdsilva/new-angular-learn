import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {

  clientForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required]],
      birth: [new Date(), [Validators.required]],
      age: [0, [Validators.required, Validators.max(150), Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
      phone1: ['', [Validators.required]],
      phone2: ['', [Validators.required]],
    });
  }


  onSubmit() {
    console.log(this.clientForm.value);

  }

}
