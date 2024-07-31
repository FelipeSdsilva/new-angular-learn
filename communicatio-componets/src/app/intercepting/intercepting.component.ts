import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NameComponent } from './name/name.component';

@Component({
  selector: 'app-intercepting',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NameComponent,
  ],
  templateUrl: './intercepting.component.html',
  styleUrl: './intercepting.component.css'
})
export class InterceptingComponent {

  name: string = '';
}
