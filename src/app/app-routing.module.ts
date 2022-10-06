import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { ProfileBasicInfoComponent } from './profile/profile-basic-info/profile-basic-info.component';
import { AuthGuardService as AuthGuard} from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer1',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule),
    canActivate: [AuthGuard]
  },
  { path: '', component: AuthenticationComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
