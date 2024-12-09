import { Component } from '@angular/core';
import { MaterialModules } from '../../angular-material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  imports: [
    MaterialModules,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formRegister: FormGroup;
  states: string[] = ['MG', 'SP', 'RJ', 'BA', 'CE', 'AM', 'AL', 'MA', 'PA',];

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.formRegister = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required,]],
      'address': ['', []],
      'city': ['', []],
      'state': ['', []],
      'phone': ['', []],
      'mobilephone': ['', []],
      'email': ['', [Validators.required, Validators.email]],
      'password1': ['', [Validators.required, Validators.minLength(6)]],
      'password2': ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.matchingPasswords });

  }

  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if (password1 === password2) return null;
    }
    return { matching: false };
  }

  onSubmit() {
    const newUser: User = {
      firstname: this.formRegister.controls['firstname'].value,
      lastname: this.formRegister.controls['lastname'].value,
      address: this.formRegister.controls['address'].value,
      city: this.formRegister.controls['city'].value,
      state: this.formRegister.controls['state'].value,
      phone: this.formRegister.controls['phone'].value,
      mobilephone: this.formRegister.controls['mobilephone'].value,
      email: this.formRegister.controls['email'].value,
      password: this.formRegister.controls['password1'].value
    }

    console.log(newUser);

    this.auth.register(newUser).subscribe(
      u => {
        this.snackBar.open('Successfully registered!', 'OK', { duration: 2000 })
        this.router.navigateByUrl('/auth/login');
      }, (error) => {
        console.log(error);
      }
    );

  }
}