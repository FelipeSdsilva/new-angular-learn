import { Component, OnInit } from '@angular/core';
import { MaterialModules } from '../../core/modules/material-modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  states = ["MG", "RS", "SC", "GO", "PR", "SP"];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.formRegister = this.fb.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'state': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'mobilephone': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password1': ['', [Validators.required, Validators.minLength(6)]],
      'password2': ['', [Validators.required, Validators.minLength(6)]],
    }, { validator: this.matchingPasswords });
  }

  ngOnInit(): void { }

  matchingPasswords(group: FormGroup): { [key: string]: boolean } | null {
    const password1 = group.get('password1')?.value;
    const password2 = group.get('password2')?.value;
    return password1 === password2 ? null : { matching: false };
  }

  onSubmit(): void {
    if (this.formRegister.invalid) {
      this.snackBar.open('Form is invalid. Please check the inputs.', 'OK', { duration: 3000 });
      return;
    }

    const user: User = {
      ...this.formRegister.value,
      password: this.formRegister.value.password1 // Usar apenas o primeiro campo de senha
    };

    this.authService.register(user).subscribe(
      () => {
        this.snackBar.open(
          'Successfully registered. Use your credentials to sign in.',
          'OK', { duration: 2000 }
        );
        this.router.navigateByUrl('/login');
      },
      (err) => {
        console.error(err);
        this.snackBar.open(err.error.message || 'Registration failed.', 'OK', { duration: 3000 });
      }
    );
  }
}
