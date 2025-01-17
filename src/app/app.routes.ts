import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login',loadChildren: () => import('./features/login/login.routes').then(m => m.LOGIN_ROUTES)  },
  { path: 'home',loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)  },

// home { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
];
