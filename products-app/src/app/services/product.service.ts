import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop description' },
    { id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt description' },
    { id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo description' },
    { id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Mouse description' }
  ]

  private products: Product[] = [];
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(departmentService: DepartmentService) {
    for (let product of this.dataFromServer) {
      this.products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        department: departmentService.getDepartmentById(product.department_id)
      });
    }
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    let produ: Product = { ...product }
    this.products.push(produ);
    console.log(this.products);
    this.onNewProduct.emit(produ);
  }
}
