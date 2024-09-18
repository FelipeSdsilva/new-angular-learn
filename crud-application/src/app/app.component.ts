import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from '../../modules/meterial.module';
import { DepartmentComponent } from "./components/department/department.component";
import { DepartmentService } from '../../services/department.service';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModules,
    DepartmentComponent,
    ProductsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    DepartmentService,
    ProductService,
  ]
})
export class AppComponent {
  title = 'crud-application';
}
