import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Dvd } from '../../../core/models/dvd';
import { DvdService } from '../../../core/services/dvd.service';
import { MaterialModules } from '../../../core/modules/material.module';

@Component({
  selector: 'app-dvd',
  standalone: true,
  imports: [
    MaterialModules,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dvd.component.html',
  styleUrl: './dvd.component.css'
})
export class DvdComponent {
  
  dvds$: Observable<Dvd[]> = new Observable;

  constructor(
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit() {
    this.dvds$ =  this.dvdService.dvds$;
  }

  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`dvds/${i}`, {title: dvd.title}])
  }

  remove(i: number) {
    this.dvdService.remove(i);
  }
}
