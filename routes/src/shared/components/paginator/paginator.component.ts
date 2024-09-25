import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../core/modules/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

interface Category {
  id: number;
  name: string;
}


@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  searchQuery: string = '';

  // Tipar corretamente o FormControl
  productForm = new FormGroup({
    category: new FormControl<Category[]>([]) // Armazena um array de Category
  });

  // Lista de categorias
  categories: Category[] = [
    { id: 1, name: 'Eletrônicos' },
    { id: 2, name: 'Moda' },
    { id: 3, name: 'Casa' },
  ];

  products = [
    { id: 1, name: 'Produto 1', price: 50, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Produto 2', price: 100, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Produto 3', price: 150, imageUrl: 'https://via.placeholder.com/150' },
  ];

  paginatedProducts = this.products.slice(0, 3);

  // Verificação para prevenir o acesso a um objeto possivelmente undefined
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngOnInit() { }

  // Paginação
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  get category(): Category[] {
    return this.productForm.value.category || [];
  }
}


