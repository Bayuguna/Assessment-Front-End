import Constant from "../../domain/helpers/constant";
import axiosClient from "../../infrastructure/axios/axios";
import { ApiInterface } from "../interface/apiInterface";


export class Api implements ApiInterface{
    post(url: string, data: any){
        return axiosClient().post(url, data);
    };
    get(url: string, data: any) {
        return axiosClient().get(url, data);
    };
    put(url: string, data: any){
        return axiosClient().put(url, data);
    };
    delete(url: string, data: any){
        return axiosClient().delete(url, data);
    };

}