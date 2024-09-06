import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

  // clientForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl('')
  //   })
  // });
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: ['']
      })
    });
  }




  submit() {
    console.log(this.clientForm.value);
  }
}
