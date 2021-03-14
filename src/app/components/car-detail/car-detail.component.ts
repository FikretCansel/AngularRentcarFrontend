import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetail:CarDetail={brandName:"",carId:0,colorName:"",dailyPrice:0,description:"",carImages:[],modelYear:0,carName:""}

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetail(params["carId"]);
    });
  }

  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe((response)=>{
      this.carDetail=response.data
    });
  }


}
