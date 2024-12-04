import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from '../core/modules/angular-material/material.module';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MaterialModules,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  user$: Observable<User> = new Observable;
  authenticated$: Observable<boolean> = new Observable;

  logout() {

  }
}
