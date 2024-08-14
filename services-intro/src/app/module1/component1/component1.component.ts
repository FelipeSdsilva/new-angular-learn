import { Component } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2 } from '../../service2.service';

@Component({
  selector: 'app-component1',
  // standalone: true,
  // imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

  num = 0;
  text ='';

  constructor(private myService: Service1,
              private myService2: Service2) {
  }

  ngOnInit() {
    this.num = this.myService.num;
    this.text = this.myService2.text;
  }

}
