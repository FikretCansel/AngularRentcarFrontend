import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  listRentals:ListResponseModel<Rental>;
  dataLoaded=false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
     this.rentalService.getRental().subscribe((response)=>{
      this.listRentals=response;
      this.dataLoaded=true;
     });
  }
}
