import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from '../../modules/meterial.module';
import { TemplateDriveFormComponent } from "./components/template-drive-form/template-drive-form.component";
import { FormNativeValidationComponent } from "./components/form-native-validation/form-native-validation.component";
import { FormValidationComponent } from "./components/form-validation/form-validation.component";
import { FormControllComponent } from "./components/form-controll/form-controll.component";
import { FormGroupComponent } from "./components/form-group/form-group.component";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";
import { FormArrayComponent } from "./components/form-array/form-array.component";
import { FormReactiveComponent } from "./components/form-reactive/form-reactive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    TemplateDriveFormComponent,
    FormNativeValidationComponent,
    FormValidationComponent,
    FormControllComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    FormReactiveComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-project';
}
