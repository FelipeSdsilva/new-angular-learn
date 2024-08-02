import { Component } from '@angular/core';
import { MaterialModules } from '../material.modules';
import { Client } from '../../interfaces/Client';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-main-lifecicle',
  standalone: true,
  imports: [
    MaterialModules,
    ChildComponent,
  ],
  templateUrl: './main-lifecicle.component.html',
  styleUrl: './main-lifecicle.component.css'
})
export class MainLifecicleComponent {

  name: string = '';
  food: string = '';
  age: number = 0;
  private foods: string[] = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Soup'];
  private clients: Client[] = [];
  random: number = 0;
  private editClient: number = -1;

  save() {
    if (this.editClient == -1) {
      this.clients.push(
        {
          name: this.name,
          age: this.age,
          food: this.food
        }
      )
    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1
    }
    this.name = '';
    this.age = 0;
    this.food = '';
  }

  edit(id: number) {
    this.name = this.clients[id].name;
    this.age = this.clients[id].age;
    this.food = this.clients[id].food;
    this.editClient = id;

  }

  delete(id: number) {
    this.clients.splice(id, 1);
  }

  get getFoods(): string[] {
    return this.foods;
  }

  get getClients(): Client[] {
    return this.clients;
  }

  genrateRandomNumber() {
    this.random = Math.round(Math.random() * 1000);
  }
}
