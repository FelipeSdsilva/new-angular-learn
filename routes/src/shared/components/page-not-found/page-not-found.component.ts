import { Component } from '@angular/core';
import { MaterialModules } from '../../../core/modules/material.module';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MaterialModules,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
