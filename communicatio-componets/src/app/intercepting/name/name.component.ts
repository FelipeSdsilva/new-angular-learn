import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {

  private _name: string = '';

  @Input()
  set name(name: string) {
    this._name = "Your name: " + (name.trim() || '<name empty>');
  }

  get name(): string {
    return this._name;
  }
}
