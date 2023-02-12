import { CartModel } from "../../domain/model/cartModel";

export interface CartInterface {
    fetchCarts: (data:any) => CartModel | any;
    addCarts: (data:any) => CartModel | any;
    updateCarts: (data:any) => CartModel | any;
    deleteCarts: (data:any) => CartModel | any;
}