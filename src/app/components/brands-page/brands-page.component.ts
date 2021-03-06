import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.css']
})
export class BrandsPageComponent implements OnInit {

  brands: Brand[] = [];
  filterText = "";

  constructor(private toastrService:ToastrService,private activatedRoute: ActivatedRoute, private brandService: BrandService) { }

  ngOnInit(): void {

    this.getColors();
  }
  getColors() {
    this.brandService.getBrandsService().subscribe((response) => {
      this.brands = response.data;
    })
  }
  delete(brandId:number){
    this.brandService.delete(brandId).subscribe((response)=>{
      this.toastrService.success(response.message);
    },
    responseError=>{
      this.toastrService.error("Hata");
    }
    );
  }

}
