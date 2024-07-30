import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/Employee';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent implements OnInit {

  text1: string = '';
  text2: string = '';

  employee!: Employee;
  name: string = '';
  lastName: string = '';
  confirmPassword: string = '';
  fullName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initializeEmployee();
  }

  initializeEmployee(): void {
    this.employee = new Employee(
      0,
      '',
      '',
      '',
      '',
      0,
      '',
      '',
      '',
    );
  }


  onSubmit(): void {
    this.employee.name = this.name + " " + this.lastName;
    console.log(this.employee);

  }

}
