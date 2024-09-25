import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from './material.modules';
import { MainLifecicleComponent } from "./main-lifecicle/main-lifecicle.component";
import { CheckComponent } from "./check/check.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    MainLifecicleComponent,
    CheckComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
