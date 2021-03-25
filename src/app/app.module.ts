import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import {HttpClientModule} from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarPipePipe } from './pipe/car-pipe.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandPipePipe } from './pipe/brand-pipe.pipe';
import { RentResultComponent } from './rent-result/rent-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    BrandComponent,
    ColorComponent,
    NavbarComponent,
    CarComponent,
    CarDetailComponent,
    CarPipePipe,
    PaymentComponent,
    BrandPipePipe,
    RentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
