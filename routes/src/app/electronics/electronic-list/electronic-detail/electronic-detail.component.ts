import { Component } from '@angular/core';
import { MaterialModules } from '../../../../core/modules/material.module';
import { ElectronicService } from '../../../../core/services/electronic.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Electronic } from '../../../../core/models/electronic';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-electronic-detail',
  // standalone: true,
  templateUrl: './electronic-detail.component.html',
  styleUrl: './electronic-detail.component.css'
})
export class ElectronicDetailComponent {

  electronic$: Observable<Electronic> = new Observable;

  constructor(
    private electronicService: ElectronicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let i: number;
    let index = this.route.snapshot.paramMap.get('index');
    if (index != null) {
      i = +index;
      this.electronic$ = this.electronicService.get(i);
    }
  }

  back() {
    this.router.navigate(['..'], { relativeTo: this.route })
  }
}
