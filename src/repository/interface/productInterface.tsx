import { ProductModel } from "../../domain/model/productModel";


export interface ProductInterface {
    fetchProducts: (data:any) => ProductModel | any;
    getProduct: (data:any) => ProductModel[] | any;
    addProduct: (data:any) => ProductModel | any;
    updateProduct: (data:any) => ProductModel | any;
    deleteProduct: (data:any) => ProductModel | any;
}
