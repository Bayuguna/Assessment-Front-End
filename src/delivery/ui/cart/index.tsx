import { TrashIcon } from "@heroicons/react/24/solid";
import formatCurrency from "../../../domain/helpers/formatCurrency";
import useCart from "../../../repository/hook/cartHook";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import useTransaction from "../../../repository/hook/transactionHook";


const CartPage = () => {

    const { cart, handleDeleteCart } = useCart();
    const {handleAddTransactions}    = useTransaction()
    
    return (
        <div className="py-40 px-10">
        <div className="flex justify-center pb-10">
            <span className="font-bold text-xl uppercase text-danger">Assessment Cart</span>
        </div>
        <div className="flex flex-col space-y-5">
        {cart.map((item:any, index:any) => (
           <div key={index}>
            <Card  className="flex flex-col md:flex-row rounded-2xl overflow-hidden h-full">
                <div className="flex-1">
                    <img src={item.product_image} alt={item.product_name} className="w-auto h-full object-cover"/>
                </div>
                <div className="flex-1 w-full h-full">
                    <div className="flex flex-col space-y-5 p-5 w-full h-full">
                        <div className="flex flex-col space-y-4 h-full">
                                <span className="text-center text-7xl">
                                    {item.product_name} 
                                </span>

                                <span className="text-center text-3xl">Price: USD. {formatCurrency.format(item.product_price)}</span>
                                <span className="text-center text-4xl">
                                    Quantity : {item.qty} 
                                </span>

                                <span className="text-center text-3xl">
                                    Sub Total : {formatCurrency.format(item.qty * item.product_price)} 
                                </span>
                        </div>
                        <div className="flex w-full space-x-3">
                                <div className="flex w-full">
                                    <Button style='danger-outline' className="w-full" onClick={() => handleAddTransactions(item)}>Purchase</Button>
                                </div>
                                {/* <div>
                                    <Button style='primary' className="w-full" onClick={() => {onChangeCartHandler(item)}}>
                                        <ShoppingCartIcon className="w-5 h-5 text-white" />
                                    </Button>
                                </div>
                                <div>
                                    <Button style='success' className="w-full" onClick={() => {handleDataUpdateitem(item)}}><PencilSquareIcon className="w-5 h-5 text-white" /></Button>
                                    <DialogUpdateitem show={dialogUpdateitem} onClicCancel={() => {setDialogUpdateitem(false)}} data={updateData} />
                                </div> */}
                                <div>
                                    <Button style='danger' className="w-full" onClick={() => handleDeleteCart(item._id)}><TrashIcon className="w-5 h-5 text-white" /></Button>
                                </div>
                        </div>
                    </div>
                </div>
            </Card>
           </div>
        ))}
        </div>
        </div>
    );
};

export default CartPage;