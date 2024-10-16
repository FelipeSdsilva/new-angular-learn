import { Component } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { Product } from '../../core/models/product';
import { MatTableDataSource } from '@angular/material/table';
import { GenericTableComponent } from '../../shared/compoments/generic-table/generic-table.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    GenericTableComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = [];

  products$: Observable<Product[]> = new Observable;
  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.products$ = this.mainService.getProducts();
    this.products$.subscribe(products => {
      this.dataSource.data = products;
      this.displayedColumns = Object.keys(products[0]);
    }
    );
  }
}