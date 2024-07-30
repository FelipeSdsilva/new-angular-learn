import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent implements OnInit {

  color: string = "warn"
  disabled: boolean = false
  colors = ['primary', 'secundary', 'warn']
  idx = 0

  constructor() {

  }

  ngOnInit(): void {
    try {
      setInterval(() => {
        this.idx = (this.idx + 1) % this.colors.length;
      }, 500);
    }
    catch {
      throw new Error('Method not implemented.');
    }
  }
}