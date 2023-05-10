import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'add-products', component: AddProductsComponent
      },
      {
        path: 'add-categories', component: AddCategoriesComponent
      },
      {
        path: 'update-product/:id', component: UpdateProductComponent
      },
      {
        path: 'orders', component: OrdersComponent
      },
      {
        path:'feedback',component:FeedbackComponent
      },
      {
        path: '', redirectTo: '/admin/home', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
