import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChildItemComponent } from './child-item/child-item.component';


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    MatCardModule,
    ChildItemComponent,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  title: string = "Test";
  value: number = 0;

  incBy(event : any) {
    this.value += event;
  }
}
