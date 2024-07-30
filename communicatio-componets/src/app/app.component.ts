import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { EventComponent } from './event/event.component';
import { ClientsComponent } from './clients/clients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputBindingComponent,
    EventComponent,
    ClientsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communicatio-componets';
}
