import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModules } from '../core/modules/material-modules';
import { AuthService } from '../core/services/auth.service';
import { MainService } from '../core/services/main.service';
import { Observable } from 'rxjs';
import { User } from '../core/models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    RouterLink,
  ],
  providers: [AuthService, MainService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auth';


  authenticated$: Observable<boolean> = new Observable;
  user$: Observable<User | null> = new Observable;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
