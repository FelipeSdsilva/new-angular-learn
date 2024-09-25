import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DvdService } from '../../../../core/services/dvd.service';
import { Router } from '@angular/router';
import { MaterialModules } from '../../../../core/modules/material.module';

@Component({
  selector: 'app-dvd-form',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './dvd-form.component.html',
  styleUrl: './dvd-form.component.css'
})
export class DvdFormComponent {

  formDvd: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) {
    this.formDvd = this.fb.group({
      'title': [''],
      'year': [''],
      'genre': [''],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formDvd.valid) {
      this.dvdService.add(this.formDvd.value);
      this.router.navigate(['/dvds']);
    }
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}