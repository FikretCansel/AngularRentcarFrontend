import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import {PaymentComponent} from "./components/payment/payment.component"

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"rentalHistory",component:RentalComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"brand/:brandId",component:CarComponent},
  {path:"color/:colorId",component:CarComponent},
  {path:"payment/:carId",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
