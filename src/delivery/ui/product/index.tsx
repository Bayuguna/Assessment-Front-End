import { PencilSquareIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
import formatCurrency from "../../../domain/helpers/formatCurrency";
import useProduct from "../../../repository/hook/productHook";
import Button from "../../components/atoms/Button";
import Card from "../../components/atoms/Card";
import SideBarright from "../../components/molecules/SideBarRight";
import DialogProduct from "./DialogProduct";
import DialogAddProduct from "./DialogAddProduct";
import { DialogUpdateProduct } from "./DialogUpdateProduct";


const ProductPage = () => {
    const {products, dialogAddProduct, setDialogAddProduct, handleDeleteProduct, onChangeCartHandler, detailModal, setDetailModal, handleDetailProduct, detailProduct, handleDataUpdateProduct, setDialogUpdateProduct, dialogUpdateProduct, setAddProduct, setUpdateProduct, updateData, handleAddProduct, handleUpdateProduct} = useProduct();

    return (
        <div className="relative">
            <div className="flex w-full h-full">
                <div className="flex flex-col min-h-screen w-full  px-5 md:px-20 py-28 md:py-40">

                    <div className="flex justify-start w-full items-start p-10">
                        <Button style="primary" className="w-full" onClick={() => setDialogAddProduct(true)}>Add Product</Button>

                        <DialogAddProduct show={dialogAddProduct} onClicCancel={() => {setDialogAddProduct(false)}} />
                    </div>
                    <div className="flex flex-col space-y-6 w-full">
                        {products?.map((product:any, index:any) => (
                        <div key={index}>
                                <Card  className="flex flex-col md:flex-row rounded-2xl overflow-hidden h-full">
                                    <div className="flex-1">
                                        <img src={product.image} alt={product.name} className="w-auto h-full object-cover"/>
                                    </div>
                                    <div className="flex-1 w-full h-full">
                                        <div className="flex flex-col space-y-5 p-5 w-full h-full">
                                            <div className="flex flex-col space-y-4 h-full">
                                                    <span className="text-center text-7xl">
                                                        {product.name} 
                                                    </span>

                                                    <span className=" text-sm">{product.type}</span>
                                                    <span className=" text-sm">{product.description}</span>
                                                    <span>USD. {formatCurrency.format(product.price)}</span>
                                                    <span className="text-center">{product.stock ? `${product.stock} Available` : ''}</span>
                                            </div>
                                            <div className="flex w-full space-x-3">
                                                    <div className="flex w-full">
                                                    {
                                                        product.stock ?
                                                        <Button style='danger-outline' className="w-full" onClick={() => handleDetailProduct(product)}>Get Now</Button>
                                                        :
                                                        <Button disabled={true} style={'secondary'} className="w-full">Out Of Stock</Button>
                                                    }
                                                    </div>
                                                    <div>
                                                        <Button style='primary' className="w-full" onClick={() => {onChangeCartHandler(product)}}>
                                                            <ShoppingCartIcon className="w-5 h-5 text-white" />
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <Button style='success' className="w-full" onClick={() => {handleDataUpdateProduct(product)}}><PencilSquareIcon className="w-5 h-5 text-white" /></Button>
                                                        <DialogUpdateProduct show={dialogUpdateProduct} onClicCancel={() => {setDialogUpdateProduct(false)}} data={updateData} />
                                                    </div>
                                                    <div>
                                                        <Button style='danger' className="w-full" onClick={() => handleDeleteProduct(product._id)}><TrashIcon className="w-5 h-5 text-white" /></Button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                        </div>
                        ))}
                    </div>
                </div>
                <div className={`${detailModal ? 'block' : 'hidden'}`}>
                    <div className={`flex relative`}>
                        <SideBarright closeModal={() => setDetailModal(false)}>
                                    <span className="text-sm">
                                        {detailProduct ? 
                                        
                                        <div className="flex flex-col space-y-3">
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex-auto">
                                                    <img src={detailProduct?.image} alt={detailProduct?.name} className="w-auto h-full object-cover"/>
                                                </div>
                                                <div>
                                                    <span className="text-sm">{detailProduct?.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        : 'No Product Selected'}
                                    </span>
                        </SideBarright>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;