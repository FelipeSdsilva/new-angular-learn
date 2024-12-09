import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../core/models/user.model';
import { MaterialModules } from '../core/modules/angular-material/material.module';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  user$: Observable<User | null> = new Observable;
  authenticated$: Observable<boolean> = new Observable();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user$ = authService.getUser();
    this.authenticated$ = authService.authenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
