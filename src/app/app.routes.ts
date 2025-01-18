import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./features/login/login.routes').then(m => m.LOGIN_ROUTES) },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) 
  },
];
