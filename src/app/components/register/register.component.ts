import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private localStorage:LocalStorageService,private router:Router,private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel=this.registerForm.value;
      console.log(registerModel);
      this.authService.register(registerModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");
        this.localStorage.set(response.data);
        this.router.navigate(["/"]);
      },responseError=>{
        this.toastrService.error(responseError.error.message,"Hata");
        console.log(responseError);
      });
    }else{
      this.toastrService.error("Formu Eksik","Dikkat");
    }
  }


}
