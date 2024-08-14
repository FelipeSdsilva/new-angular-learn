import { Component } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component3',
  // standalone: true,
  // imports: [],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css'
})
export class Component3Component {

  num = 0;

  constructor(private myService: Service1) {
  }

  ngOnInit() {
    this.num = this.myService.num;
  }
}
