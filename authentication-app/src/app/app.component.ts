import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModules } from '../core/modules/material-modules';
import { MainService } from '../core/modules/main/main.service';
import { AuthService } from '../core/modules/auth/auth.service';
import { GenericTableComponent } from '../shared/compoments/generic-table/generic-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {

}
