import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44395/api/users/";

  updateFullName(user:UserModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"updatefullname",user);
  }



}
