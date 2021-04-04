import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ExpirationInterceptor implements HttpInterceptor {

  constructor(private router:Router,private toastrService:ToastrService,private localStorageService:LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenModel = this.localStorageService.getToken();
    if (!tokenModel) {
      return next.handle(request);
    }
    let expirationDate = new Date(this.localStorageService.getExpiration());
    let currentDate = new Date();

    if(Number(expirationDate)<=Number(currentDate)){
      this.localStorageService.signOut();
      this.toastrService.info("Oturum Süresi Doldu.Lütfen Tekrar Giriş Yapınız");
      this.router.navigate(["login"]);
    }
    return next.handle(request);
  }
}
