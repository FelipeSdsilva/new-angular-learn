import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../core/modules/material.module';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> = new Observable;
  filterProducts$: Observable<Product[]> = new Observable;
  displayedColumns = ['name', 'price', 'stock', 'operations'];

  @ViewChild('name')
  productName!: ElementRef;
  productForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar) {
    this.productForm = this.fb.group({
      id: [undefined],
      name: ['', [Validators.required]],
      stock: [0, [Validators.required]],
      price: [0, [Validators.required]],
    })
  }

  ngOnInit() {
    this.productService.getProducts().then(products => {
      this.products$ = products;     
    });
  }

  onSubmit() {
    let p: Product = this.productForm.value;
    if (!p.id) {
      this.addProduct(p);
    }
    else {
      this.updateProduct(p);
    }
  }

  addProduct(p: Product) {
    this.productService.addProduct(p)
      .then(() => {
        this.snackBar.open('Product added.', 'OK', { duration: 2000 });
        this.productForm.reset({ name: '', stock: 0, price: 0, id: undefined });
        this.productName.nativeElement.focus();
      })
      .catch(() => {
        this.snackBar.open('Error on submiting the product.', 'OK', { duration: 2000 });
      })
  }

  updateProduct(p: Product) {
    this.productService.updateProduct(p)
      .then(() => {
        this.snackBar.open('Product updated!', 'OK', { duration: 2000 });
        this.productForm.reset({ name: '', stock: 0, price: 0, id: undefined });
        this.productName.nativeElement.focus();
      })
      .catch((e) => {
        console.log(e);
        this.snackBar.open('Error updating the product', 'OK', { duration: 2000 });
      })

  }

  edit(p: Product) {
    this.productForm.setValue(p);
  }

  del(p: Product) {
    this.productService.deleteProduct(p)
      .then(() => {
        this.snackBar.open('Product has been removed', 'OK', { duration: 2000 });
      })
      .catch((e) => {
        console.log(e);
        this.snackBar.open('Error when trying to remove the product', 'OK', { duration: 2000 });
      })
  }

  filter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement; // Faz o cast para HTMLInputElement
    this.filterProducts$ = this.productService.searchByName(input.value);
  }
}
