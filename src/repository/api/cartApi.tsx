import { CartInterface } from "../interface/cartInterface";
import { Api } from "./api";


class CartApi implements CartInterface{
    api = new Api();
    
    fetchCarts(data: any){
        return new Promise((resolve, reject) => {
            this.api.get('/v1/cart', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };
    
    addCarts(data: any){
        return new Promise((resolve, reject) => {
            this.api.post('/v1/cart', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };
    
    updateCarts(data: any){
        return new Promise((resolve, reject) => {
            this.api.put(`/v1/cart/${data.id}`, data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    deleteCarts(id: any){
        return new Promise((resolve, reject) => {
            this.api.delete(`/v1/cart/${id}`, id).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

}

export default CartApi;