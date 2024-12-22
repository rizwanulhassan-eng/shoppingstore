import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MensproductComponent } from './mensproduct/mensproduct.component';
import { WomensproductComponent } from './womensproduct/womensproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderPageComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MensproductComponent,
    WomensproductComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
