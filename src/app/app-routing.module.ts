import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import {PaymentComponent} from "./components/payment/payment.component"
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';

const routes: Routes = [
  {path:"cars/add",component:CarAddComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"color/update",component:ColorUpdateComponent},
  {path:"brand/update",component:BrandUpdateComponent},
  {path:"rentalHistory",component:RentalComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"payment/:carId",component:PaymentComponent},
  {path:"",component:CarComponent},
  {path:"brand/:brandId",component:CarComponent},
  {path:"color/:colorId",component:CarComponent},
  {path:"cars",component:CarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
