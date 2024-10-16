import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModules } from '../material-modules';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GenericTableComponent } from "../../../shared/compoments/generic-table/generic-table.component";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MaterialModules,
    CommonModule,
    AuthRoutingModule,
    GenericTableComponent
]
})
export class AuthModule {
    static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
        throw new Error('Method not implemented.');
    }
}
