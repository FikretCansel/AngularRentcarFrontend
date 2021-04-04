import { TokenModel } from "./tokenModel";

export interface AuthResultModel extends TokenModel{
    userId:number,
    firstName:string,
    lastName:string,
}