import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [
    MatCard,
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  users = [
    { login: "bob", role: "admin", lastLogin: new Date('2024-07-29') },
    { login: "alice", role: "user", lastLogin: new Date('2024-07-28') },
    { login: "charlie", role: "manager", lastLogin: new Date('2024-07-27') },
    { login: "eve", role: "admin", lastLogin: new Date('2024-07-26') },
    { login: "dave", role: "user", lastLogin: new Date('2024-07-25') }
  ];

}
