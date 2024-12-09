import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialModules } from '../../angular-material/material.module';
import { User } from '../../../models/user.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.formbuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {

  }


  private loginOkNotification(user: User) {
    this.snackBar.open('Logged successfuly. Welcome ' + user.firstname + ' !', 'OK', { duration: 2000 })
  }

  private loginErrorNotification(error: any) {
    this.snackBar.open(error, 'ERROR', { duration: 2000 })
  }

  onSubmit() {
    this.loading = true;
    this.auth.login(
      this.loginForm.value.email,
      this.loginForm.value.password,
    ).subscribe(
      (u) => {
        if (u) {
          this.loading = false;
          this.loginOkNotification(u);
          this.router.navigateByUrl('/main/people');
        }
      },
      (error) => {
        this.loading = false;
        this.loginErrorNotification(error);
      }
    );
  }

  loginGoogle() {
    this.loading = true;
    this.auth.loginGoogle()
      .subscribe((u) => {
        this.loading = false;
        this.loginOkNotification(u);
        this.router.navigateByUrl('/');
      },
        catchError((error) => {
          this.loading = false;
          this.loginErrorNotification(error);
          throw error;
        }));

  }
}
