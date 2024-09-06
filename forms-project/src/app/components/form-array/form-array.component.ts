import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {

  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.clientForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: ['']
      }),
      phones: this.formBuilder.array(['']),
      childrens: this.formBuilder.array([],
      )
    });
  }

  ngOnInit() { }

  addPhone() {
    this.phones.push(this.formBuilder.control(''));
  }

  ngOnDestroy() {
    if (this.clientForm) {
      this.clientForm.reset();
    }
  }

  get phones(): FormArray {
    return this.clientForm.get('phones') as FormArray;
  }

  get childrens(): FormArray {
    return this.clientForm.get('childrens') as FormArray;
  }

  addChild() {
    const childFormGroup = this.formBuilder.group({
      name: [''],
      age: ['']
    });
    this.childrens.push(childFormGroup);
  }
}
