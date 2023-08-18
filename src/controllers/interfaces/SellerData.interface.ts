import {IRegisterData} from "./RegisterData.interface";

export interface ISellerData extends IRegisterData{
    inn?: string;
    certificate?: string;
}