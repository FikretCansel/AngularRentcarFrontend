import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService,private router:Router) { }

  userName:string=this.localStorageService.getFirstAndLastName();

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
