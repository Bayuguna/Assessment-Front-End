import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { menuNav } from "../../../../infrastructure/contents/menuNav";
import Logo from "../../atoms/Logo";
import { useRouter } from "next/router";
import Button from "../../atoms/Button";
import { Routing } from "../../../../infrastructure/router/router_constant";
import useNavbar from "../../../../repository/hook/navbarHook";
import { useEffect, useState } from "react";
import { DialogConfirmLogout } from "./DialogConfirmLogout";
import useProduct from "../../../../repository/hook/productHook";

const Navbar = () => {
    const router = useRouter();

    const {profile, handleLogout, menu, setMenu, dialogConfirmLogout, setDialogConfirmLogout} = useNavbar();

    const {countCart} = useProduct();

    useEffect(() => {
        console.log('count', countCart);
    }, [countCart])

    return (
        <header>
            <nav className={`fixed px-10 py-5 md:px-32 md:py-8 flex flex-row justify-between w-full right-0 left-0 top-0 bg-white dark:bg-dark-200 z-50 items-center`}>
                <div className="hidden md:block">
                    <Logo/>
                </div>
                <div className="block md:hidden">
                    <Logo/>
                </div>
                <div className={`hidden md:block md:ml-10`}>
                    <div className="flex flex-row items-center space-x-10">
                        {
                            menuNav.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="flex flex-row space-x-1">
                                            <div>
                                            <Link href={item.href} scroll={false}>
                                                <span className={`text-black dark:text-white font-bold pb-1 ${router.asPath === item.href ? 'border-b-2 border-gold dark:border-white' : ''} hover:border-b-2 hover:border-gold hover:dark:border-white`}>{item.name}</span>
                                            </Link>
                                            </div>
                                            {item.label ?
                                            <div className="relative">
                                                <div className="text-[6px] bg-danger rounded-lg flex justify-center items-center px-1 py-1 text-white font-bold ">
                                                    {item?.label}
                                                </div>
                                            </div>:''}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <div className="flex flex-row space-x-5 justify-center items-center">
                        <div className="relative">
                            <Link href={Routing.CART}>
                            <ShoppingCartIcon className="h-7 w-7 text-gold"/>
                                <div className="absolute -top-1 -right-1 w-3 h-3 p-2 flex justify-center items-center bg-danger rounded-full">
                                    <span className="text-[8px] text-white font-bold">{countCart}</span>
                                </div>
                            </Link>
                        </div>
                        <div className={`block md:hidden`} onClick={() => {setMenu(!menu)}}>
                            <Bars3Icon className="h-7 w-7 text-gold"/>
                        </div>
                        <div className={`hidden md:block`}>
                            {profile ? 
                                <Button type="submit" style="danger" onClick={() => setDialogConfirmLogout(true )}>Log Out</Button>:
                                <Link href={Routing.AUTH}>
                                    <Button style="danger">Sign In</Button>
                                </Link>
                            }
                        </div>
                        <DialogConfirmLogout
                            onClicCancel={() => setDialogConfirmLogout(false)}
                            onClickYes={handleLogout}
                            show={dialogConfirmLogout}
                        />
                    </div>
                </div>
            </nav>
            <div className={`block md:hidden ${menu === true ? 'block' : 'hidden'}`}>
                <div className={`fixed flex justify-center left-0 right-0 top-10 bg-white dark:bg-dark-200 h-1/2 z-30`}>
                    <div className="flex flex-col justify-center items-center gap-5">
                        {
                            menuNav
                                .map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={item.href} scroll={false} onClick={() => {setMenu(!menu)}}>
                                            <span className={`text-black dark:text-white font-bold`}>{item.name}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                         {profile ? 
                                <Button type="submit" style="danger" onClick={handleLogout}>Log Out</Button>:
                                <Link href={Routing.AUTH}>
                                    <Button style="danger">Sign In</Button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;