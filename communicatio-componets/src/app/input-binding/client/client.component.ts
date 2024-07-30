import { Component, Input } from '@angular/core';
import { Client } from '../../../interfaces/Client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    CommonModule,
  
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  @Input('client') client: Client = {
    id: 0,
    name: '',
    age: 0
  };

  constructor() {
  }
}
