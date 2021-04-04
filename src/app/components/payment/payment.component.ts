import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/carDto';
import { CreditCardModel } from 'src/app/models/creditCardModel';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/ResponseModel';
import { CarService } from 'src/app/services/car.service';
import { CreditCardService } from 'src/app/services/credit-card.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private creditCardService:CreditCardService,private localStorageService:LocalStorageService,private toastrService:ToastrService,private formBuilder:FormBuilder,private carService: CarService, private rentalService: RentalService, private activatedRoute: ActivatedRoute) { }
  carDetail: Car = { brandId:0,colorId:0,brandName: "", carId: 0, colorName: "", dailyPrice: 0, description: "", modelYear: 0, carName: "" }
  day: number = 0;
  startDate: Date;
  endDate: Date;
  rental: Rental = {UserId:this.localStorageService.getCustomerNo(), CarId: 0, RentDate: null, ReturnDate: null, TotalRentPrice: 0 }
  IsRentable:ResponseModel={message:".",success:false};
  ResultRental:ResponseModel={message:".",success:false}


  CreditCardForm:FormGroup;
  saveCardBool:boolean;

  myCards:CreditCardModel[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetail(params["carId"]);
      this.rental.CarId =Number(params["carId"]);
    });
    this.createCreditCardForm();
    this.getMyCreditCards();
  }

  createCreditCardForm(){
    this.CreditCardForm=this.formBuilder.group({
        userId:[this.localStorageService.getCustomerNo(),Validators.required],
        cardHolderName:["",Validators.required],
        cardNumber:["",Validators.required],
        cvv:["",Validators.required],
        validThruMonth:["",Validators.required],
        validThruYear:["",Validators.required]
    });
  }
  changeSaveCardStatus(){
    this.saveCardBool=!this.saveCardBool;
  }
  getCarDetail(carId: number) {
    this.carService.getPaymentCarDetail(carId).subscribe((response => {
      this.carDetail = response.data
    }));
  }
  getMyCreditCards(){
    this.creditCardService.getMyCreditCards().subscribe((response)=>{
      this.myCards=response.data
      console.log(this.myCards);
    });
  }
  calculatePrice() {
    if (this.startDate && this.endDate) {
      let endDate = new Date(this.endDate.toString())
      let startDate = new Date(this.startDate.toString())
      let endDay = Number.parseInt(endDate.getDate().toString())
      let endMonth = Number.parseInt(endDate.getMonth().toString())
      let endYear = Number.parseInt(endDate.getFullYear().toString())
      let startDay = Number.parseInt(startDate.getDate().toString())
      let startMonth = Number.parseInt(startDate.getMonth().toString())
      let startYear = Number.parseInt(startDate.getFullYear().toString())
      let day = ((endDay - startDay) + ((endMonth - startMonth) * 30) + ((endYear - startYear) * 365));
      this.day = day;
      if (day > 0) {
        this.rental.RentDate = this.startDate;
        this.rental.ReturnDate = this.endDate;
        this.rental.TotalRentPrice = this.day * this.carDetail.dailyPrice;
        this.IsRentablefuc();
      }
    }
  }
  IsRentablefuc() {
    this.rentalService.IsRentable(this.rental.RentDate, this.rental.ReturnDate, this.rental.CarId)
    .subscribe(response=>this.IsRentable=response);
  }
  Rent(){
    if(this.CreditCardForm.valid){
      if(this.saveCardBool){
        console.log("kart kaydedildi");
        this.creditCardService.saveCreditCard(this.CreditCardForm.value).subscribe();
      }
      this.rentalService.Rent(this.rental).subscribe(result=>this.ResultRental=result);
    }
    else this.toastrService.error("Kredi kartı bilgileriniz eksik","Eksik")
  }
  RentWithSavedCard(card:CreditCardModel){
    this.rentalService.Rent(this.rental).subscribe(result=>this.ResultRental=result);
  }
}
