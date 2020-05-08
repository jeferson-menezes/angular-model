import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SigninComponent } from './pages/home/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthAccessGuard } from './core/auth/auth.access.guard';
import { AuthNavigationGuard } from './core/auth/auth.navigation.guard';

const routes: Routes = [
  { path: '', component: SigninComponent, canActivate: [AuthAccessGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthNavigationGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
