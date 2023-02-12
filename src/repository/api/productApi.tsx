import { ProductInterface } from "../interface/productInterface";
import { Api } from "./api";


class ProductApi implements ProductInterface{
    api = new Api();
    fetchProducts(data: any){
        return new Promise((resolve, reject) => {
            this.api.get('/v1/product', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    getProduct(data: any) {
        return new Promise((resolve, reject) => {
            this.api.get(`/v1/product/${data}`, data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    addProduct(data: any){
        return new Promise((resolve, reject) => {
            this.api.post('/v1/product', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    }

    updateProduct(data: any) {
        return new Promise((resolve, reject) => {
            this.api.put(`/v1/product/${data.id}`, data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    deleteProduct(data: any){
        return new Promise((resolve, reject) => {
            this.api.delete(`/v1/product/${data}`, data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

};


export default ProductApi;