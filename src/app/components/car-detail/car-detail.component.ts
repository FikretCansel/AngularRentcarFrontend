import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetail={colorId:0,brandId:0,brandName:"",carId:0,colorName:"",dailyPrice:0,description:"",carImages:[],modelYear:0,carName:""}
  ImageIndex=1;
  dataLoad=false;
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetail(params["carId"]);
    });
  }

  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe((response)=>{
      this.carDetail=response.data
      this.dataLoad=true;
    });
  }

  nextImage(){
    if(this.ImageIndex<this.carDetail.carImages.length)
      this.ImageIndex++;
  }
  backImage(){
    if(this.ImageIndex>1)
    this.ImageIndex--;
  }
  updateScreen(){
    
  }
}
