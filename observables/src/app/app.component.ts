import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from './material.modules';
import { BasicComponent } from "./components/basic/basic.component";
import { ColdObservableComponent } from "./components/cold-observable/cold-observable.component";
import { HotObservableComponent } from "./components/hot-observable/hot-observable.component";
import { HotObservablesSubscribeComponent } from "./components/hot-observables-subscribe/hot-observables-subscribe.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    BasicComponent,
    ColdObservableComponent,
    HotObservableComponent,
    HotObservablesSubscribeComponent,
    SubjectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
