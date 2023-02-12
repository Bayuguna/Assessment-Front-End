import { TransactionModel } from "../../domain/model/transactionModel";

export interface TransactionInterface {
    fetchTransactions: (data:any) => TransactionModel | any;
    addTransactions: (data:any) => TransactionModel | any;
    deleteTransactions: (data:any) => TransactionModel | any;
}