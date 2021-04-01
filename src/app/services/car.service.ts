import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/carDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { CarBase } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44395/api/cars";
  getAllDetailsUrl="https://localhost:44395/api/cars/getalldetails"
  apiGetByBrandUrl="https://localhost:44395/api/cars/getbybrand?Id="
  apiGetByColorUrl="https://localhost:44395/api/cars/getbycolor?Id="
  paymentApiUrl="https://localhost:44395/api/cars/getonecardetails?id=";


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.getAllDetailsUrl);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetByBrandUrl+brandId);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetByColorUrl+colorId);
  }
  getPaymentCarDetail(carId:number):Observable<ItemResponseModel<Car>>{
    return this.httpClient.get<ItemResponseModel<Car>>(this.paymentApiUrl+carId);
  }
  add(car:CarBase):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",car);
  }
  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"/update",car);
  }
}
