import { Component } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component4',
  // standalone: true,
  // imports: [],
  templateUrl: './component4.component.html',
  styleUrl: './component4.component.css'
})
export class Component4Component {

  num = 0;

  constructor(private myService: Service1) {
  }

  ngOnInit() {
    this.num = this.myService.num;
  }

}
