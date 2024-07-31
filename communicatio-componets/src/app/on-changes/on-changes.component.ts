import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NameChangesComponent } from './name-changes/name-changes.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NameChangesComponent,
    MatIconModule,
  ],
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.css'
})
export class OnChangesComponent {


  name: string = '';
  newName: string = '';


  updateName() {
    this.newName = this.name;

  }

}
