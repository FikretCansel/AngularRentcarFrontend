import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardModel } from '../models/creditCardModel';
import { ListResponseModel } from '../models/listResponseModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {


  apiUrl="https://localhost:44395/api/creditCards/";
  constructor(private localStorgae:LocalStorageService,private httpClient:HttpClient) { }

  saveCreditCard(creditCard:CreditCardModel){
    return this.httpClient.post(this.apiUrl+"add",creditCard);
  }
  getMyCreditCards():Observable<ListResponseModel<CreditCardModel>>{
    return this.httpClient.get<ListResponseModel<CreditCardModel>>(this.apiUrl+"getbyuserid?userId="+this.localStorgae.getCustomerNo());
  }
}
