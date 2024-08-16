import { Component } from '@angular/core';
import { MaterialModules } from '../../material.modules';
import { Department } from '../../models/Departament';
import { DepartmentService } from '../../services/department.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    MaterialModules
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  name: string = '';
  departments: Department[] = [];
  price: number = 0;
  description: string = '';
  department!: Department;
  arrayLenth: number = 0;

  constructor(private departmentService: DepartmentService, private productService: ProductService) {
    this.departments = departmentService.getDepartments();
  }

  save() {
    this.arrayLenth = this.productService.getAllProducts().length;
    let newId = this.arrayLenth + 1;
    console.log(this.arrayLenth);
    
    this.productService.addProduct(
      {
        id: newId,
        name: this.name,
        description: this.description,
        price: this.price,
        department: this.department
      });
    this.clear();
  }

  clear() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.department = null!;
  }
}
