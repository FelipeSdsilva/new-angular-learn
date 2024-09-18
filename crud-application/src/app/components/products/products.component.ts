import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/meterial.module';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { Department } from '../../../../models/department.model ';
import { Product } from '../../../../models/product.model';
import { DepartmentService } from '../../../../services/department.service';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productForm: FormGroup;

  @ViewChild('form') form!: NgForm;

  products: Product[] = [];
  departments: Department[] = [];

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private snackbar: MatSnackBar) {

    this.productForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      departments: [[], [Validators.required]]
    });
  }

  ngOnInit() {
    this.productService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((prods) => this.products = prods);
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((deps) => this.departments = deps);
  }

  ngOnDestroy() {
    this.unsubscribe$.next('');
  }

  save() {
    let data = this.productForm.value;
    if (data.id != null) {
      this.productService.update(data)
        .subscribe(
          (p) => this.notify("Updated!")
        );
    }
    else {
      this.productService.add(data)
        .subscribe(
          (p) => this.notify("Inserted!!")
        );
    }
    this.resetForm();
  }

  delete(p: Product) {
    this.productService.del(p)
      .subscribe(
        () => this.notify("Deleted!"),
        (err) => console.log(err)
      )
  }

  edit(p: Product) {
    const selectedDepartments = this.departments.filter(dep => p.departments.some(department => department.id === dep.id));
    this.productForm.patchValue({
      id: p.id,
      name: p.name,
      stock: p.stock,
      price: p.price,
      departments: selectedDepartments // Objetos completos
    });
  }  
  

  notify(msg: string) {
    this.snackbar.open(msg, "OK", { duration: 3000 });
  }

  resetForm() {
    //this.productForm.reset();
    // Checar: https://github.com/angular/material2/issues/4190
    this.form.resetForm();
  }
}
