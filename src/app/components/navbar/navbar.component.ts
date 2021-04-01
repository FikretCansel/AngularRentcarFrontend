import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsAuthenticated:boolean=false;
  Name:string="a";

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    this.Name=localStorage.getItem("name");
    if(localStorage.getItem("name")){
      this.IsAuthenticated=true;
    }
  }

}
