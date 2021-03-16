import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44395/api/cars/getalldetails";

  apiGetByBrandUrl="https://localhost:44395/api/cars/getbybrand?Id="
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiGetByBrandUrl+brandId);
  }
}
