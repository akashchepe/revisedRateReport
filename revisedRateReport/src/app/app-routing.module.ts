import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/components/login/login.component';
import { NewPasswordComponent } from './pages/login/components/new-password/new-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'new-password', component: NewPasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'dashboard', 
    canActivate: [AuthGuard],
    loadChildren: () => 
      import('./pages/dashboard/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
