import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ClassResponseModel } from '../models/classResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44395/api/cars/getalldetails";

  apiGetByBrandUrl="https://localhost:44395/api/cars/getbybrand?Id="
  apiGetByColorUrl="https://localhost:44395/api/cars/getbycolor?Id="
  paymentApiUrl="https://localhost:44395/api/cars/getonecardetails?id=";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetByBrandUrl+brandId);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetByColorUrl+colorId);
  }
  getPaymentCarDetail(carId:number):Observable<ClassResponseModel<Car>>{
    return this.httpClient.get<ClassResponseModel<Car>>(this.paymentApiUrl+carId);
  }
  
}
