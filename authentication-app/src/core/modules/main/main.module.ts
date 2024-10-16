import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModules } from '../material-modules';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { GenericTableComponent } from '../../../shared/compoments/generic-table/generic-table.component';


@NgModule({
  declarations: [
    PeopleComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModules,
    GenericTableComponent,
  ],
})
export class MainModule { }
