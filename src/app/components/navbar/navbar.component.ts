import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsAuthenticated:boolean=false;
  firtName:string="";
  fullName:string="";
  constructor(private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    this.firtName=this.localStorage.getFirtName();
    this.fullName=this.localStorage.getFirstAndLastName();
    this.IsAuthenticated=this.localStorage.isAuthenticated();
  }
  signOut(){
    this.localStorage.signOut();
  }

}
