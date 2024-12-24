import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AppComponent } from './app.component';
import { WomensproductComponent } from './womensproduct/womensproduct.component';
import { KidsproductComponent } from './kidsproduct/kidsproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MensproductComponent } from './mensproduct/mensproduct.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderPageComponent } from './order/order.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AccessoriesComponent } from './accessories/accessories.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'', component: LandingpageComponent, pathMatch: 'full'},
  {path:'landingpage',component:LandingpageComponent},
  {path:'womenproduct',component:WomensproductComponent},
  {path:'womenproduct/:id',component:ProductDetailsComponent},
  {path:'menproduct',component:MensproductComponent},
  {path:'menproduct/:id',component:ProductDetailsComponent},
  {path:'kidproduct',component:KidsproductComponent},
  {path:'kidproduct/:id',component:ProductDetailsComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'accessories/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  { path: 'order', component: OrderPageComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
