import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/carDto';

@Pipe({
  name: 'carPipe'
})
export class CarPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    
    filterText=filterText.toLowerCase();

    return filterText? value.filter(c=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
