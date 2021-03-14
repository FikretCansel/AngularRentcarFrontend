import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { ClassResponseModel } from '../models/classResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44395/api/cars/getonecarallinfo?Id=";

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ClassResponseModel<CarDetail>>{
    return this.httpClient.get<ClassResponseModel<CarDetail>>(this.apiUrl+carId);
  }

}
