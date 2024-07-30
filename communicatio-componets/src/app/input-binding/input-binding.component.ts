import { Component, Input } from '@angular/core';
import { Client } from '../../interfaces/Client';
import { ClientComponent } from './client/client.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-binding',
  standalone: true,
  imports: [
    ClientComponent,
    CommonModule,
  ],
  templateUrl: './input-binding.component.html',
  styleUrl: './input-binding.component.css'
})
export class InputBindingComponent {

  @Input()
  name: string = '';
  @Input('otherName')
  lastName: string = '';
  age: number = 0;

  clients: Client[] = [];

  constructor() {
    this.clients = [
      { id: 1, name: 'Bob', age: 10 },
      { id: 2, name: 'Joao', age: 10 },
      { id: 3, name: 'Ana', age: 10 },
      { id: 1, name: 'Maria', age: 10 },
    ]
  }
}
