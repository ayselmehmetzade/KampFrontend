import { Category } from "./category";
import { ResponseModel } from "./response-model";


export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}