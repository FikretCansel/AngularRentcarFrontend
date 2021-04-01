import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResultModel } from '../models/AuthResultModel';
import { ItemResponseModel } from '../models/itemResponseModel';
import {LoginModel} from "../models/loginModel";
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44395/api/auth/";

  login(loginModel:LoginModel):Observable<ItemResponseModel<AuthResultModel>>{
    return this.httpClient.post<ItemResponseModel<AuthResultModel>>(this.apiUrl+"login",loginModel);
  }
  register(registerModel:RegisterModel):Observable<ItemResponseModel<AuthResultModel>>{
    return this.httpClient.post<ItemResponseModel<AuthResultModel>>(this.apiUrl+"register",registerModel);
  }
  isAuthenticated(){
    var token=localStorage.getItem("token");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  getUserInfo(){
    
  }
}
