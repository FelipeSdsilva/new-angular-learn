import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module1Module } from "./module1/module1.module";
import { Module2Module } from "./module2/module2.module";
import { MaterialModules } from '../material.modules';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    Module1Module,
    Module2Module
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services-intro';
}

