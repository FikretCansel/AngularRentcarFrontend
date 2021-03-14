import { ResponseModel } from "./ResponseModel";

export interface ClassResponseModel<T> extends ResponseModel{
    data:T
}