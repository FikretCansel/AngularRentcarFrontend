import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignoutGuard implements CanActivate {


  constructor(private localStorageService:LocalStorageService,
    private toastrService:ToastrService,
     private router:Router){
 }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.localStorageService.isAuthenticated()){
        this.router.navigate(["signout"]);
        return false;
      }else{
        return true;
      }
  }

  
  
}
