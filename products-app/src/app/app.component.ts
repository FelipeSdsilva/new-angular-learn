import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from './material.modules';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    CommonModule,
    FormsModule,
    DepartmentFormComponent,
    ProductFormComponent,
    ProductsTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products-app';
}
