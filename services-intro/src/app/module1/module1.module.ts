import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { Component1Component } from './component1/component1.component';
import { MaterialModules } from '../../material.modules';
import { Service1 } from './service1.service';



@NgModule({
  declarations: [Component1Component, Component2Component],
  exports: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    MaterialModules,
  ],
  providers: [Service1]
})
export class Module1Module { }
