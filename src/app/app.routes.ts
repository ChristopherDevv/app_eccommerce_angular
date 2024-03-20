import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component')
    },
    {
        path: 'products',
        loadComponent:   () => import('./features/products/products.component')
    },
    {
        path: 'product-details/:id',
        loadComponent:   () => import('./features/products/details/details.component')
    },
    {
        path: 'checkout',
        loadComponent:   () => import('./features/checkout/checkout.component')
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
