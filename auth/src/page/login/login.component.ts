import { Component } from '@angular/core';
import { MaterialModules } from '../../core/modules/material-modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  loginForm: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar) {

    this.loginForm = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': [{ value: '', disabled: false }, [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const crendentials = this.loginForm.value;
    this.loading = true;
    this.authService.login(crendentials)
      .subscribe(
        (user) => {
          this.snackBar.open(
            'Logged in successfuly. Welcome ' + user.firstname + '!', 'OK',
            { duration: 2000 });
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.snackBar.open(
            'Login Error', 'OK', { duration: 2000 });
          this.loading = false;
        }
      )
  }
}
