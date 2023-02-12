

export interface TransactionModel {
    id?: number;
    product_id?: string;
    product_name?: string;
    product_price?: string;
    product_image?: string;
    tax?: number;
    total?: number;
    qty?: number;
    user_id?: string;
    status_payment?: string;
    status_shipping?: string;
    created_at?: string;
    updated_at?: string;
}
