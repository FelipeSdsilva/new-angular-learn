import { Decimal } from 'decimal.js';

export interface Product {
    id: number,
    name: string;
    department: string,
    price: Decimal;
}