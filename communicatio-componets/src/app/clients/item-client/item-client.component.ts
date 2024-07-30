import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../../interfaces/Client';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-client',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './item-client.component.html',
  styleUrl: './item-client.component.css'
})
export class ItemClientComponent {

  @Input()
  client: Client = {
    id: 0,
    name: '',
    age: 0,
  };

  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<Client>();

  onEdit: boolean = false;

  save() {
    this.onEdit = false;
    this.updateClient.emit(this.client);
  }

  edit() {
    this.onEdit = true;
  }

  delete() {
    this.removeClient.emit();
  }
}
