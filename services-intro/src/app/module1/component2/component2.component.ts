import { Component } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2 } from '../../service2.service';

@Component({
  selector: 'app-component2',
  // standalone: true,
  // imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
  num: any;
  text: any;

  constructor(private myService: Service1,
    private myService2: Service2
  ) {
    this.num = myService.num;
    this.text = myService2.text;
  }



}
