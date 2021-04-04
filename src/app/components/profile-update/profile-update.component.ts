import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private localStorage:LocalStorageService,private toastrService: ToastrService, private userService: UserServiceService, private formBuilder: FormBuilder, private localStorageService: LocalStorageService) { }
  userToUpdate: UserModel={firstName:"",lastName:"",id:0};
  profileForm: FormGroup;
  ngOnInit(): void {
    this.createProfileForm();
  }

  createProfileForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    })
  }

  update() {
    if (this.profileForm.valid) {

      let profileModel = this.profileForm.value;

      this.userToUpdate.id=this.localStorageService.getCustomerNo();
      this.userToUpdate.firstName = profileModel.firstName;
      this.userToUpdate.lastName = profileModel.lastName;
      this.userService.updateFullName(this.userToUpdate).subscribe((response) => {
        this.localStorage.setFullName(this.userToUpdate.firstName,this.userToUpdate.lastName);
        this.toastrService.success(response.message, "Başarılı");
      },
        responseError => {
          console.log(responseError)
          this.toastrService.error(responseError.message, "Hata");
        }
      );


    }
  }
}
