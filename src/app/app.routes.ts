import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RegisterPage } from './components/register-page/register-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'register', component: RegisterPage },
  { path: '**', redirectTo: '' }
];
