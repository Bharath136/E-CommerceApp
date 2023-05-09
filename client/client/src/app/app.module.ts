import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { UpdateProductComponent } from './modules/admin/components/update-product/update-product.component';
import { OrdersComponent } from './modules/admin/components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    LandingPageComponent,
    HeaderComponent,
    MyCartComponent,
    UpdateProductComponent,
    OrdersComponent,
    ProductDetailsComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
