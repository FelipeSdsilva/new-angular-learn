import { Routes } from '@angular/router';
import { RegisterComponent } from '../page/register/register.component';
import { LoginComponent } from '../page/login/login.component';
import { ProductsComponent } from '../page/products/products.component';
import { PersonsComponent } from '../page/persons/persons.component';
import { AuthGuard } from '../core/services/auth-guard.service';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent, canActivate: [ AuthGuard] },
    { path: 'peoples', component: PersonsComponent, canActivate: [ AuthGuard] }
];
