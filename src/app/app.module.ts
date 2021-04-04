import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarPipePipe } from './pipe/car-pipe.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandPipePipe } from './pipe/brand-pipe.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ExpirationInterceptor } from './interceptors/expiration.interceptor';
import { BrandsPageComponent } from './components/brands-page/brands-page.component';
import { ColorsPageComponent } from './components/colors-page/colors-page.component';


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
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    LoginComponent,
    RegisterComponent,
    ProfileUpdateComponent,
    SignOutComponent,
    BrandsPageComponent,
    ColorsPageComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: 
  [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ExpirationInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
