import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/CarResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44395/api/cars/getalldetails";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}
