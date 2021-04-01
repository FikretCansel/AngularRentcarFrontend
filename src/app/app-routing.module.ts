import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import {PaymentComponent} from "./components/payment/payment.component"
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { SignoutGuard } from './guards/signout.guard';
import { SignOutComponent } from './components/sign-out/sign-out.component';

const routes: Routes = [
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"color/add",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"color/update",component:ColorUpdateComponent,canActivate:[LoginGuard]},
  {path:"brand/update",component:BrandUpdateComponent,canActivate:[LoginGuard]},
  {path:"rentalHistory",component:RentalComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"payment/:carId",component:PaymentComponent},
  {path:"",component:CarComponent},
  {path:"brand/:brandId",component:CarComponent},
  {path:"color/:colorId",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"login",component:LoginComponent,canActivate:[SignoutGuard]},
  {path:"register",component:RegisterComponent,canActivate:[SignoutGuard]},
  {path:"signout",component:SignOutComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
