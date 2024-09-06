import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';

@Component({
  selector: 'app-form-native-validation',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './form-native-validation.component.html',
  styleUrl: './form-native-validation.component.css'
})
export class FormNativeValidationComponent {

  firstName: string = '';
  lastName: string = '';


  constructor() { }

  onSubmit() { }

}
