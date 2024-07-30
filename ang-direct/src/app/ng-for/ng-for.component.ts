import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Employee } from '../../models/Employee';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NgForComponent {

  names: string[] = [
    'Alice',
    'Bruno',
    'Carla',
    'Diego',
    'Elena',
    'Felipe',
    'Gabriela',
    'Henrique',
    'Isabela',
    'João',
    'Karen',
    'Leonardo',
    'Mariana',
    'Nicolas',
    'Olivia',
    'Paulo',
    'Quintino',
    'Raquel',
    'Sofia',
    'Tiago',
    'Ursula',
    'Vitor',
    'Wagner',
    'Xavier',
    'Yara',
    'Zoe'
  ];

  employees: Employee[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1234567890',
      TIN: '123-45-6789',
      numberHouse: 101,
      password: 'password123',
      dateOfBirth: '1990-01-15',
      hireDate: '2020-05-01'
    },
    {
      id: 2,
      name: 'Bruno Silva',
      email: 'bruno.silva@example.com',
      phone: '+0987654321',
      TIN: '987-65-4321',
      numberHouse: 202,
      password: 'securepass456',
      dateOfBirth: '1985-03-22',
      hireDate: '2019-07-10'
    },
    {
      id: 3,
      name: 'Carla Diaz',
      email: 'carla.diaz@example.com',
      phone: '+1122334455',
      TIN: '555-66-7777',
      numberHouse: 303,
      password: 'mypassword789',
      dateOfBirth: '1992-08-30',
      hireDate: '2021-01-20'
    },
    {
      id: 4,
      name: 'Diego Martinez',
      email: 'diego.martinez@example.com',
      phone: '+2233445566',
      TIN: '111-22-3333',
      numberHouse: 404,
      password: 'password321',
      dateOfBirth: '1988-11-12',
      hireDate: '2018-09-15'
    },
    {
      id: 5,
      name: 'Elena Gomez',
      email: 'elena.gomez@example.com',
      phone: '+3344556677',
      TIN: '444-55-6666',
      numberHouse: 505,
      password: 'securepass123',
      dateOfBirth: '1995-05-05',
      hireDate: '2022-03-25'
    }];
}
