import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-name-changes',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './name-changes.component.html',
  styleUrl: './name-changes.component.css'
})
export class NameChangesComponent implements OnChanges {
  @Input()
  name: string = '';
  nameBefore: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'])
      this.nameBefore = changes['name'].previousValue;
  }

}
