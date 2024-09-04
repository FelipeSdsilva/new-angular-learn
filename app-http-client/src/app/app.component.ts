import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModules } from '../../modules/material.modules';
import { ProductService } from '../../services/product.service';
import { delay, Observable, timeout } from 'rxjs';
import { Product } from '../../models/product.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import Decimal from 'decimal.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProductComponent } from './components/dialog-edit-product/dialog-edit-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaterialModules,
    RouterOutlet,
  ],
  providers: [
    ProductService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;

  simpleRequestProductsObs$!: Observable<Product[]>;
  productsErrorHandling: Product[] = [];
  productsLoading: Product[] = [];
  productsId: Product[] = [];
  newlyProducts: Product[] = [];
  deleteProducts: Product[] = [];
  productsToEdit: Product[] = [];

  bLoading: boolean = false;

  product: Product = {
    id: 0,
    name: '',
    department: '',
    price: new Decimal(0)
  };

  @ViewChild('name') nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('dep') depInput!: ElementRef<HTMLInputElement>;
  @ViewChild('price') priceInput!: ElementRef<HTMLInputElement>;

  constructor(private snackBar: MatSnackBar, private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  getSimpleHttpRequest() {
    this.simpleRequestProductsObs$ = this.productService.getProductsListed();
  }

  getProductsEithErrorHadling() {
    this.productService.getProductsError()
      .subscribe(
        products => this.productsErrorHandling = products,
        error => {
          console.log(error)
          console.log(error.message);
          console.log(error.status);

          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack-err'];
          if (error.status == 0)
            this.snackBar.open('Could not connect to the server', '', config);
          else
            this.snackBar.open(error.error.error, '', config);
        }
      )
  }

  getProductsEithErrorHadlingOk() {
    this.productService.getProductsListed()
      .subscribe(
        (products) => {
          this.productsErrorHandling = products
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack-ok'];
          this.snackBar.open('Products sucessfuly loaded!', '', config);
        }
      )
  }

  getProductsLoading() {
    this.bLoading = true;
    this.productService.getProductsListed()
      .pipe(
        delay(2000)
      )
      .subscribe(
        (products) => {
          this.productsLoading = products;
          this.bLoading = false;
        },
        (error) => {
          console.log(error);
          this.bLoading = false;
        }
      )
  }

  getProductId() {
    this.productService.getProductsListed()
      .subscribe(products => {
        products.map(product => {
          ({ id: product.id, name: '', department: '', price: 0 });
          this.productsId.push(product);
        });
      });
  }

  loadingName(event: Event, productId: number, productInfo: HTMLElement) {
    event.stopPropagation();
    this.productService.getProductPerId(productId)
      .subscribe(prod => {
        console.log(prod);

        const product = this.productsId.find(p => p.id === productId);
        if (product) {
          productInfo.textContent = prod.name;
        }
      });
  }

  saveNewProduct(name: string, department: string, price: number) {
    let bigdecimal: Decimal = new Decimal(price);
    let newProduct: Product = { id: 0, name, department, price: bigdecimal }

    this.productService.postNewProduct(newProduct)
      .subscribe(() => {
        console.log(newProduct);
        this.newlyProducts.push(newProduct)
      },
        (err) => {
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack-err'];
          if (err.status == 0)
            this.snackBar.open('Could not connect to the server', '', config);
          else
            this.snackBar.open(err.error.error, '', config);
        }
      );

    console.log(this.product)
    this.clearInputs();
  }

  clearInputs() {
    this.nameInput.nativeElement.value = '';
    this.depInput.nativeElement.value = '';
    this.priceInput.nativeElement.valueAsNumber = 0;
  }

  loadProductsToDelete() {
    this.productService.getProductsListed()
      .subscribe((products) => this.deleteProducts = products);
  }

  deleteProductPerId(event: Event, productId: number) {
    event.stopPropagation();
    this.productService.deleteProductPerId(productId)
      .subscribe(prod => {
        console.log(prod);
        let i = this.deleteProducts.findIndex(prod => productId == prod.id)
        this.deleteProducts.splice(i, 1);
      },
        (err) => {
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack-err'];
          if (err.status == 0)
            this.snackBar.open('Could not connect to the server', '', config);
          else
            this.snackBar.open(err.error.error, '', config);
        });
  }

  editProduct(product: Product) {
    let newProduct: Product = { ...product };
    let dialogRef = this.dialog.open(DialogEditProductComponent, { width: '400px', data: newProduct });
    dialogRef.afterClosed()
      .subscribe(res => {
        console.log(res)
        if (res != undefined) {
          this.productService.putProductPerId(res.id, res)
            .subscribe(
              product => {
                let i = this.productsToEdit.findIndex(prod => product.id == prod.id)
                if (i >= 0)
                  this.productsToEdit[i] = product;
              },
              error => {
                console.error(error);

              })
        }
      })
  }

  loadProductsToEdit() {
    this.productService.getProductsListed()
      .subscribe((products) => this.productsToEdit = products);
  }
}
