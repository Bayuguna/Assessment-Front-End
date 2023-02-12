import { useEffect, useState } from "react";
import ProductApi from "../api/productApi";
import { io } from "socket.io-client";
import useCart from "./cartHook";
let socket: any;

const useProduct = () => {
    const productApi = new ProductApi();
    const [products, setProducts] = useState<any>();
    const [getDataProduct, setDataProduct] = useState<any>();
    const [dialogAddProduct, setDialogAddProduct] = useState(false);
    const [dialogUpdateProduct, setDialogUpdateProduct] = useState(false);
    const [updateProduct, setUpdateProduct] = useState({_id: "", image:"", name: "", description: "", type:"car", price: "", stock: ""});
    const [detailModal , setDetailModal] = useState(false);

    const {cart, handleAddCart} = useCart();


    //Fetch Data
    useEffect(() => {
        handleFetchProduct();
    }, [])

    const handleFetchProduct = () => {
        productApi.fetchProducts({}).then((res: any) => {
            setProducts(res.data);
        }).catch((err: any) => {
            console.log(err);
        })
}
        

    // Get Product By Id
    // const getProduct = (id: any) => {
    //     productApi.getProduct(id).then((res: any) => {
    //         setDataProduct(res);
    //     }).catch((err: any) => {
    //         console.log(err);
    //     })
    // }

    const handleProduct = (id: any) => {
        productApi.getProduct(id).then((res: any) => {
            setDataProduct(res.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    useEffect(() => {
        setDataProduct(getDataProduct);
    }, [getDataProduct])

    //Post Product
    const [addProduct, setAddProduct] = useState({image:"", name: "", description: "", type:"car", price: "", stock: ""});
    function handleAddProduct() 
    {
        // console.log('addProduct', addProduct)
        const data = {
            name: addProduct.name,
            description: addProduct.description,
            price: addProduct.price,
            type: addProduct.type,
            image: addProduct.image,
            stock: addProduct.stock
        }

        console.log('product', data);

        productApi.addProduct(data).then((res: any) => {
            handleFetchProduct();
            setDialogAddProduct(false);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    //Update Product
    const handleUpdateProduct = () =>
    {
        const data = {
            id: updateProduct._id,
            name: updateProduct.name,
            description: updateProduct.description,
            price: updateProduct.price,
            type: updateProduct.type,
            image: updateProduct.image,
            stock: updateProduct.stock
        }
        
        console.log('update', data)
        productApi.updateProduct(data).then((res: any) => {
            console.log(res);
            setDialogUpdateProduct(false);
            handleFetchProduct();
        }).catch((err: any) => {
            console.log(err);
        })
    }


    const [updateData, setUpdateData] = useState<any>({});
    const handleDataUpdateProduct = (data:any) => {
        console.log(data)
        setUpdateData(data);
        console.log('update', updateData);
        setDialogUpdateProduct(true);
    }
        


    //Delete Product
    const handleDeleteProduct = (id:any) => 
    {
        // console.log('addProduct', addProduct)
        productApi.deleteProduct(id).then((res: any) => {
            console.log(res);
            handleFetchProduct();
        }).catch((err: any) => {
            console.log(err);
        })
    }


    //Detail Product
    const [detailProduct, setDetailProduct] = useState<any>()
    const handleDetailProduct = (data:any) => {
        setDetailProduct(data);
        setDetailModal(true);
    }

    //Add Cart
    const [countCart, setCountCart] = useState(0);

    useEffect(() => {
        socketInitializer()
        setCountCart(cart.length);
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('update-cart', (message:any) => {
            console.log(message)
            setCountCart(message)
        })
    }

    const onChangeCartHandler = (data:any) => {
        let count = cart.length;
        count = count + 1;
        setCountCart(count);
        socket.emit('add-cart', count)
        console.log(data)
        handleAddCart(data);
    }

    return {
        products,
        getDataProduct,
        setDataProduct,
        handleProduct,
        dialogAddProduct,
        setDialogAddProduct,
        addProduct,
        setAddProduct,
        handleAddProduct,
        handleDeleteProduct,
        updateProduct,
        setUpdateProduct,
        handleUpdateProduct,
        onChangeCartHandler,
        detailModal,
        setDetailModal,
        countCart,
        setCountCart,
        handleDetailProduct,
        detailProduct,
        handleDataUpdateProduct,
        updateData,
        setUpdateData,
        setDialogUpdateProduct,
        dialogUpdateProduct,
    }
    
}

export default useProduct;