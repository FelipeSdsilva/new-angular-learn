import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/main/peoples' },
    { path: 'main', loadChildren: () => import(`../core/modules/main/main-routing.module`).then(m => m.MainRoutingModule) },
    { path: 'auth', loadChildren: () => import(`../core/modules/auth/auth-routing.module`).then(m => m.AuthRoutingModule) }
];
