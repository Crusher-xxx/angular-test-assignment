import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'login', component: LoginComponent },
];
