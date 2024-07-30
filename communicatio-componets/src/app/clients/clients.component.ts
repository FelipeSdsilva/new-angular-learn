import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Client } from '../../interfaces/Client';
import { ItemClientComponent } from './item-client/item-client.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ItemClientComponent,
    CommonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  id: number = 0;
  firstName: string = '';
  age: number = 0;

  clients: Client[] = [];

  save() {
    this.clients.push(
      {
        id: this.id += 1,
        name: this.firstName,
        age: this.age,
      }
    )

    this.firstName = '';
    this.age = 0;
  }

  updateClient(client: Client, number: number) {
    this.clients[number] = client;
  }

  removeClient(num: number) {
    this.clients.splice(num, 1);
  }
}

