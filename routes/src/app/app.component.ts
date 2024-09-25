import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModules } from '../core/modules/material.module';
import { ElectronicsModule } from './electronics/electronics.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ElectronicsModule],
})
export class AppComponent {
  title = 'routes';
}
