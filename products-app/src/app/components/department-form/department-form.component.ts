import { Component } from '@angular/core';
import { MaterialModules } from '../../material.modules';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [
    MaterialModules
  ],
  templateUrl: './department-form.component.html',
  styleUrl: './department-form.component.css'
})
export class DepartmentFormComponent {

  depName: string = '';
  newId: number = 0;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit() {
  }


  save() {
    let number = this.departmentService.getDepartments().length;
    this.newId = number + 1;

    console.log(this.newId);
    this.departmentService.addDepartment(
      {
        id: this.newId,
        name: this.depName,
      }
    );
    console.log(this.departmentService.getDepartments().length);
    this.clear();
  }

  clear() {
    this.depName = '';
    this.newId = 0;
  }
}
