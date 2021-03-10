import { Product } from "./product";
import { ResponseModel } from "./response-model";


export interface ProductResponseModel extends ResponseModel{
    data:Product[]
}