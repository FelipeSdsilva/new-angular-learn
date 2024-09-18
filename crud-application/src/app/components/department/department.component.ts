import { Component } from '@angular/core';
import { Department } from '../../../../models/department.model ';
import { Subject, takeUntil } from 'rxjs';
import { DepartmentService } from '../../../../services/department.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModules } from '../../../../modules/meterial.module';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  depName: string = '';
  departments: Department[] = [];
  private unsubscribe$: Subject<any> = new Subject();
  depEdit: Department = {
    id: 0,
    name: ''
  };

  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((deps) => this.departments = deps);
  }

  save() {
    if (this.depEdit) {
      this.departmentService.update(
        { name: this.depName, id: this.depEdit.id })
        .subscribe(
          (dep) => {
            this.notify('Updated!');
          },
          (err) => {
            this.notify('Error');
            console.error(err);
          }
        )
    }
    else {
      this.departmentService.add({ id: 0, name: this.depName })
        .subscribe(
          (dep) => {
            console.log(dep);

            this.notify('Inserted!');
          },
          (err) => console.error(err))
    }
    this.clearFields();
  }

  clearFields() {
    this.depName = '';
    this.depEdit = {
      id: 0,
      name: ''
    };
  }

  cancel() {
    this.clearFields();
  }

  edit(dep: Department) {
    this.depName = dep.name;
    this.depEdit = dep;
  }

  delete(dep: Department) {
    this.departmentService.del(dep)
      .subscribe(
        () => this.notify('Removed!'),
        (err) => this.notify(err.error.message)
      )
  }

  notify(msg: string) {
    this.snackBar.open(msg, "OK", { duration: 3000 });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
  }

}
