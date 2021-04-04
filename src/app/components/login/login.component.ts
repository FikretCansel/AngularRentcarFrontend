import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private localStorage:LocalStorageService,private router:Router,private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService) { }

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
      this.authService.login(loginModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");
        this.localStorage.set(response.data);
        this.router.navigate(["/"]);
      },responseError=>{
        this.toastrService.error(responseError.error.message,"Hata");
      });
    }else{
      this.toastrService.error("Formu Eksik","Dikkat");
    }
  }

}
