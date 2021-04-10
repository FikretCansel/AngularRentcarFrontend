import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  updateCarClass:Car={brandId:0,brandName:"",colorId:0,dailyPrice:0,carId:0,carName:"",colorName:"",description:"",modelYear:0};
  carUpdateScreenBool:boolean=false;
  cars:Car[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded=false;
  filterText="";

  carUpdateForm: FormGroup;

  filterForm:FormGroup;

  constructor(private route:Router,private formBuilder: FormBuilder, private toastrService: ToastrService,private colorService:ColorService,private brandService:BrandService,private carService:CarService,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrand(parseInt(params["brandId"]));
      }
      else if(params["colorId"]){
        this.getCarsByColor(parseInt(params["colorId"]));
      }
      else{
        this.getCars();
      }
    })
    this.createFilterForm();
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
  }
  updateCarClassBtn(car:Car){
    this.updateCarClass=car;
    this.createCarUpdateForm();
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id:[this.updateCarClass.carId,Validators.required],
      name: [this.updateCarClass.carName, Validators.required],
      brandId: [this.updateCarClass.brandId,Validators.required],
      colorId: [this.updateCarClass.colorId, Validators.required],
      modelYear: [this.updateCarClass.modelYear, Validators.required],
      dailyPrice: [this.updateCarClass.dailyPrice, Validators.required],
      description: [this.updateCarClass.description, Validators.required]
    });
  }
  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      colorIdFil:[0],
      brandIdFil: [0],
    });
  }
  filter(){
    let form=this.filterForm.value;
      this.carService.filter(form.brandIdFil,form.colorIdFil).subscribe((response)=>{
        this.cars=response.data;
      });
  }

  update() {
    console.log(this.carUpdateForm.value);
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
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


  getCars(){
    this.carService.getCars().subscribe((response=>{
      this.cars=response.data;
      this.dataLoaded=true;
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
    })
  }

}