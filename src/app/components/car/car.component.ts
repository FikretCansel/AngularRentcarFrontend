import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  updateCarClass:Car;
  carUpdateScreenBool:boolean=false;
  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded=false;
  filterText="";

  carUpdateForm: FormGroup

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,private colorService:ColorService,private brandService:BrandService,private carService:CarService,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
        this.getBrands();
        this.getColors();
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
        this.getBrands();
        this.getColors();
      }
      else{
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    })
    this.createCarUpdateForm();
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name: ["", Validators.required],
      brandId: ["",Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]
    });
  }


  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      console.log(carModel);
      this.carService.update(carModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Hata");
          }
        }
      });
    }
    else this.toastrService.error("Formunuz eksik", "Dikkat");
  }

  closeUpdate(){
    this.carUpdateScreenBool=false;
  }


  openUpdateScreen(car:Car){
    this.updateCarClass=car;
    console.log(this.updateCarClass);
    this.carUpdateScreenBool=true;
  }

  getCars(){
    this.carService.getCars().subscribe((response=>{
      this.cars=response.data;
      this.dataLoaded=true;
      console.log(response.data);
    }));
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    }));
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    }));
  }
  getBrands(){
    this.brandService.getBrandsService().subscribe((response)=>{
      this.brands=response.data;
    })
  }
  getColors(){
    this.colorService.getColorsService().subscribe((response)=>{
      this.colors=response.data;
      console.log(response.data);
    })
  }

}
