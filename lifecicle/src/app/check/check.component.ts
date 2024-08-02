import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MaterialModules } from '../material.modules';
import { CheckChildComponent } from "./check-child/check-child.component";

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [
    MaterialModules,
    CheckChildComponent,
  ],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css'
})
export class CheckComponent implements OnInit {

  name: string = '';
  age: number = 0;

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()');
  }

  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentCheckd() {
    console.log('ngAfterContentCheckd()');
  }

  ngAfterViewinit() {
    console.log('ngAfterViewinit()');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }
}
