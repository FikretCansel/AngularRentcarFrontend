import { Car } from "./carDto";
import { CarImagesClass } from "./carImagesClass";

export interface CarDetail extends Car{
    carImages:Array<CarImagesClass>;
}