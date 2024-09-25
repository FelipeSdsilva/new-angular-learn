import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DvdService } from '../../../../core/services/dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from '../../../../core/models/dvd';
import { MaterialModules } from '../../../../core/modules/material.module';

@Component({
  selector: 'app-dvd-detail',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './dvd-detail.component.html',
  styleUrl: './dvd-detail.component.css'
})
export class DvdDetailComponent {


  dvd$: Observable<Dvd> = new Observable;
  title: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('index'));
    
    const index: number = Number(this.route.snapshot.paramMap.get('index')) || 0;
    this.dvd$ = this.dvdService.get(index);
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        if (params.has('title'))
          this.title = params.get('title');
      })
    /*console.log("Index: ", this.route.snapshot.paramMap.get('index'));
    this.route.paramMap
      .subscribe((params: ParamMap) => console.log("Index: ", params.get('index')));*/
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}
