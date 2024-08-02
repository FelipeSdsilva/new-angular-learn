import { Component } from '@angular/core';

@Component({
  selector: 'app-check-child',
  standalone: true,
  imports: [],
  templateUrl: './check-child.component.html',
  styleUrl: './check-child.component.css'
})
export class CheckChildComponent {
  ngOnInit() {
    console.log('check-child ngOnInit()');
  }

  ngOnChanges() {
    console.log('check-child ngOnChanges()');
  }

  ngDoCheck() {
    console.log('check-child ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('check-child ngAfterContentInit()');
  }

  ngAfterContentCheckd() {
    console.log('check-child ngAfterContentCheckd()');
  }

  ngAfterViewinit() {
    console.log('check-child ngAfterViewinit()');
  }

  ngAfterViewChecked() {
    console.log('check-child ngAfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('check-child ngOnDestroy()');
  }

}
