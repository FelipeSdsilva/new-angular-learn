import { Injectable } from '@angular/core';
import { Department } from '../models/Departament';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Computers' },
  ]

  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentById(id: number): Department {
    const department = this.departments.find(department => department.id === id);

    if (!department) {
      throw new Error(`Department with id ${id} not found.`);
    }
    return department;
  }


  addDepartment(department: Department) {
    this.departments.push(department);
    console.log(this.departments)
  }
}
