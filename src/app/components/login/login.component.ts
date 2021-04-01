import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel=this.loginForm.value;
      console.log(loginModel);
      this.authService.login(loginModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("expiration",response.data.expiration);
        localStorage.setItem("name",response.data.firstName+" "+response.data.lastName);
        console.log(response);
        this.router.navigate(["/"]);
      },responseError=>{
        this.toastrService.error(responseError.error.message,"Hata");
      });
    }else{
      this.toastrService.error("Formu Eksik","Dikkat");
    }
  }

}
