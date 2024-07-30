import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-child-item',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './child-item.component.html',
  styleUrl: './child-item.component.css'
})
export class ChildItemComponent {

  @Input() title: string = '';
  @Output() inc = new EventEmitter<number>();



  plusOneClick() {
    this.inc.emit(1);
  }

  plusTwoClick() {
    this.inc.emit(2);
  }

  SubOneClick() {
    this.inc.emit(-1);
  }

  subTwoClick() {
    this.inc.emit(-2);
  }
}
