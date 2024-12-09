import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotfoundComponent } from '../core/modules/auth/notfound/notfound.component';
import { AuthGuardService } from '../core/services/auth/auth-guard.service';

export const routes: Routes = [
    { path: '', redirectTo: '/main/people', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    {
        path: 'auth',
        loadChildren: () => import('../core/modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'main',
        loadChildren: () => import('../core/modules/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];