import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }
  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
    });
  }
  update() {
    if (this.brandUpdateForm.valid) {
      let brandForm = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandForm).subscribe((response) => {
        this.toastrService.success(response.message)
      },
        responseError => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Hata");
            }
          }
        }
      );
    }else this.toastrService.error("Form Eksik","Dikkat");
  }

}
