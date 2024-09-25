import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ElectronicListComponent } from './electronic-list/electronic-list.component';
import { ElectronicDetailComponent } from './electronic-list/electronic-detail/electronic-detail.component';
import { MaterialModules } from '../../core/modules/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [ElectronicListComponent, ElectronicDetailComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule,
    MaterialModules,
    RouterLink,
    RouterLinkActive,
  ],
})
export class ElectronicsModule { }
