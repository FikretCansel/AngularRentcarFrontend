import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { ItemResponseModel } from '../models/itemResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/carDto';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  currentCar:Car;

  apiUrl="https://localhost:44395/api/cars/getonecarallinfo?Id=";

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ItemResponseModel<CarDetail>>{
    return this.httpClient.get<ItemResponseModel<CarDetail>>(this.apiUrl+carId);
  }
}
