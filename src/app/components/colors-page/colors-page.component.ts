import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors-page',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.css']
})
export class ColorsPageComponent implements OnInit {

  constructor(private toastrService:ToastrService,private colorService:ColorService) { }

  colors:Color[]=[];

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColorsService().subscribe((response)=>{
      this.colors=response.data
    });
  }
  delete(colorId:number){
    this.colorService.delete(colorId).subscribe((response)=>{
      this.toastrService.success(response.message);
    },
    responseError=>{
      this.toastrService.error("Hata");
    }
    );
  }

}
