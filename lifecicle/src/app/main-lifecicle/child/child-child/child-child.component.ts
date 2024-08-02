import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-child',
  standalone: true,
  imports: [],
  templateUrl: './child-child.component.html',
  styleUrl: './child-child.component.css'
})
export class ChildChildComponent implements OnInit {

  @Input() name: string = '';

  constructor() {
    console.log('child child (constructor) ' + this.name)
  }

  ngOnInit() {
    console.log('child child (ngOnInit) ' + this.name)
  }

  ngOnChanges() {
    console.log('child child  (ngOnChanges) ' + this.name)
  }

  ngAfterContentInit() {
    console.log('child child  (ngAfterContentInit) ' + this.name)
  }
}
