import { Department } from "./department.model ";

export interface Product {
    id: number;
    name: string;
    departments: Department[];
    stock: number;
    price: number;
}