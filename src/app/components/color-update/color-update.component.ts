import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm:FormGroup;
  id:number;
  constructor(private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private colorService:ColorService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params["id"];
    });
    this.createColorUpdateForm();
  }
  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.id, Validators.required],
      name: ["", Validators.required],
    });
  }
  update() {
    if (this.colorUpdateForm.valid) {
      let colorForm = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.update(colorForm).subscribe((response) => {
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
