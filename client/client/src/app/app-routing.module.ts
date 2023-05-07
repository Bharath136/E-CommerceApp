import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'', redirectTo: '/home',pathMatch:'full',
  },
  {
    path:'home',
    component:LandingPageComponent
  },
  {
    path:'my-cart',
    component:MyCartComponent
  },
  {
    path:'admin',loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
