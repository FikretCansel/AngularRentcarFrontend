import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44395/api/rentals/";

  rentApiUrl="https://localhost:44395/api/rentals/CheckRentableAndRental";

  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getAllRentalDetails");
  }

  IsRentable(rentDate:Date,returnDate:Date,carId:number):Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(`https://localhost:44395/api/rentals/IsRentable?rentDate=${rentDate}&returnDate=${returnDate}&carId=${carId}`);
  }
  Rent(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.rentApiUrl,rental);
  }

  
}
