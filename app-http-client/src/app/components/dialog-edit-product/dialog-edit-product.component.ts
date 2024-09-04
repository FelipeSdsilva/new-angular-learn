import { Component, Inject } from '@angular/core';
import { MaterialModules } from '../../../../modules/material.modules';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../../models/product.model';
import Decimal from 'decimal.js';

@Component({
  selector: 'app-dialog-edit-product',
  standalone: true,
  imports: [
    MaterialModules,
  ],
  templateUrl: './dialog-edit-product.component.html',
  styleUrl: './dialog-edit-product.component.css'
})
export class DialogEditProductComponent {


  product: Product = {
    id: 0,
    name: '',
    department: '',
    price: new Decimal(0)
  };

  constructor(
    public dialogRef: MatDialogRef<DialogEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public prod: Product
  ) {
    this.product = prod;
  }

  cancel() {
    this.dialogRef.close();
  }
}
