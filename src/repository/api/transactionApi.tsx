import { TransactionInterface } from "../interface/transactionInterface";
import { Api } from "./api";


class TransactionApi implements TransactionInterface{
    api = new Api();

    fetchTransactions(data: any){
        return new Promise((resolve, reject) => {
            this.api.get(`/v1/transaction/${data.user_id}`, data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    addTransactions(data: any){
        return new Promise((resolve, reject) => {
            this.api.post('/v1/transaction', data).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

    deleteTransactions(id: any){
        return new Promise((resolve, reject) => {
            this.api.delete(`/v1/transaction/${id}`, id).then((res: any) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err);
            })
        });
    };

}

export default TransactionApi;