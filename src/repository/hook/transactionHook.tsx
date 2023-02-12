import { useEffect, useState } from "react";
import TransactionApi from "../api/transactionApi";
import useCart from "./cartHook";


const useTransaction = () => {

    const transactionApi = new TransactionApi();
    const [transaction, setTransaction] = useState<any>([]);

    const {handleDeleteCart} = useCart();
    useEffect(() => {
        handleFetchTransaction();

    }, [])

    const handleFetchTransaction = () => {
        const data = {
            user_id: "5f9f1b0b0b9b9c0b1c8b8b8b"
        }
        transactionApi.fetchTransactions(data).then((res: any) => {
            setTransaction(res.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const handleAddTransactions = (data: any) => {
        const transactionsData = {
            product_id: data.product_id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_image: data.product_image,
            user_id: data.user_id,
            qty: data.qty,
            tax: 10,
            total: data.price * data.qty,
            status_payment: "pending",
            status_shipping: "pending"
        }

        console.log('transactionsData', transactionsData);
        transactionApi.addTransactions(transactionsData).then((res: any) => {
            handleFetchTransaction();
            handleDeleteCart(data._id);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const handleDeleteTransactions = (id: any) => {
        transactionApi.deleteTransactions(id).then((res: any) => {
            handleFetchTransaction();
        }).catch((err: any) => {
            console.log(err);
        })
    }

    return {
        transaction,
        handleFetchTransaction,
        handleAddTransactions,
        handleDeleteTransactions
    }

}

export default useTransaction;