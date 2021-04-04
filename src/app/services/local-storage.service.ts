import { Injectable } from '@angular/core';
import { AuthResultModel } from '../models/authResultModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  set(response:AuthResultModel){
    localStorage.setItem("expiration",response.expiration);
    localStorage.setItem("firstName",response.firstName);
    localStorage.setItem("lastName",response.lastName);
    localStorage.setItem("token",response.token);
    localStorage.setItem("customerNo",response.userId.toString());
  }
  getExpiration(){
    return localStorage.getItem("expiration");
  }
  getFirtName(){
    return localStorage.getItem("firstName");
  }
  getCustomerNo(){
    return parseInt(localStorage.getItem("customerNo"));
  }
  getLastName(){
    return localStorage.getItem("lastName");
  }
  getFirstAndLastName(){
    return this.getFirtName()+" "+this.getLastName();
  }
  getToken(){
    return localStorage.getItem("token");
  }
  setFullName(firstName:string,lastName:string){
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("lastName",lastName);
  }

  isAuthenticated(){
    var token=this.getToken();
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
  signOut(){
    localStorage.clear();
  }
}
