import { Car } from "./car";
import { CarImagesClass } from "./carImagesClass";

export interface CarDetail extends Car{
    carImages:Array<CarImagesClass>;
}