import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { City } from '../../interfaces/City';


@Component({
  selector: 'app-ng-new-for',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
  ],
  templateUrl: './ng-new-for.component.html',
  styleUrl: './ng-new-for.component.css'
})
export class NgNewForComponent {

  name: string = '';
  address: string = '';
  phone: string = '';
  city?: City;
  age: number = 0;

  clients: {
    id: number,
    name: string,
    address: string,
    city?: City,
    phone: string,
    age: number,
  }[] = [];

  cities = [
    { name: 'São Paulo', state: 'SP' },
    { name: 'Rio de Janeiro', state: 'RJ' },
    { name: 'Belo Horizonte', state: 'MG' },
    { name: 'Porto Alegre', state: 'RS' },
    { name: 'Curitiba', state: 'PR' },
    { name: 'Salvador', state: 'BA' },
    { name: 'Brasília', state: 'DF' },
    { name: 'Fortaleza', state: 'CE' },
    { name: 'Recife', state: 'PE' },
    { name: 'Manaus', state: 'AM' },
    { name: 'Belém', state: 'PA' },
    { name: 'Goiânia', state: 'GO' },
    { name: 'Vitória', state: 'ES' },
    { name: 'Florianópolis', state: 'SC' },
    { name: 'Natal', state: 'RN' },
    { name: 'João Pessoa', state: 'PB' },
    { name: 'Campo Grande', state: 'MS' },
    { name: 'Cuiabá', state: 'MT' },
    { name: 'Aracaju', state: 'SE' },
    { name: 'Maceió', state: 'AL' },
    { name: 'São Luís', state: 'MA' },
    { name: 'Teresina', state: 'PI' },
    { name: 'Palmas', state: 'TO' },
    { name: 'Boa Vista', state: 'RR' },
    { name: 'Macapá', state: 'AP' },
    { name: 'Porto Velho', state: 'RO' },
    { name: 'Rio Branco', state: 'AC' }
  ];

  save(event: any) {

    const newClient = {
      id: this.clients.length + 1,
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      age: this.age
    };

    this.clients.push(newClient);
    console.log(this.clients);
    this.clearFields();
  }

  cancel(event: any) {
    this.clearFields();
  }

  private clearFields() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = undefined;
    this.age = 0;
  }

  deleteClient(client: any) {
    this.clients = this.clients.filter(c => c.id !== client.id);
  }
}
