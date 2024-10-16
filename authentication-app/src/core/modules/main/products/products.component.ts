import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { MainService } from '../main.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = [];

  products: Product[] = [];
  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getProducts().subscribe(products => {
      this.dataSource.data = products.content;
      this.products = products.content;
      this.displayedColumns = Object.keys(this.products[0])
    }
    );

  }
}
