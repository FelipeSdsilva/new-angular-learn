import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { MaterialModules } from '../../material.modules';
import { log } from 'console';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [MaterialModules],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {

  @ViewChild(MatTable)
  datatable?: MatTable<any>;

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'department'];

  constructor(private productServer: ProductService) {
    this.products = productServer.getAllProducts();
  }

  ngOnInit() {
    this.products = this.productServer.getAllProducts();
    this.productServer.onNewProduct.subscribe((p) => {
      this.datatable?.renderRows();
    });
  }

}
