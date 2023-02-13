import { useEffect, useState  } from "react";
import CartApi from "../api/cartApi";


const useCart = () => {

    const cartApi = new CartApi();
    const [cart, setCart] = useState<any>([]);

    useEffect(() => {
        handleFetchCart();
    }, [])

    const handleFetchCart = () => {
        cartApi.fetchCarts({}).then((res: any) => {
            setCart(res.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const handleAddCart = (data: any) => {
        const cartData = {
            product_id: data._id,
            product_name: data.name,
            product_price: data.price,
            product_image: data.image,
            user_id: "5f9f1b0b0b9b9c0b1c8b8b8b",
            qty: 1
        }
        cartApi.addCarts(cartData).then((res: any) => {
            console.log(res)
            handleFetchCart();
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const handleDeleteCart = (id: any) => {
    cartApi.deleteCarts(id).then((res: any) => {
            handleFetchCart();
        }).catch((err: any) => {
            console.log(err);
        })
    }

    return {
        cart,
        handleFetchCart,
        handleAddCart,
        handleDeleteCart
    }
}

export default useCart;