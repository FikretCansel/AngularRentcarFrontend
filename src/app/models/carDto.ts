import {CarBase} from "../models/car"
//carbaseden implemente edilecek
export interface Car{
    carId:number;
    carName:string;
    brandId:number;
    brandName:string;
    colorId:number;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
}