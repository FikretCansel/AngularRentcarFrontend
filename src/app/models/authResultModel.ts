import { TokenModel } from "./tokenModel";

export interface AuthResultModel extends TokenModel{
    firstName:string,
    lastName:string,
}