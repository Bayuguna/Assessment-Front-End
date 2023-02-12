import { ReactNode } from "react";
import Button from "../../atoms/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";


interface SideBarrightProps {
    children?: ReactNode;
    closeModal?: any;
}

const SideBarright = (props:SideBarrightProps) => {
    const { children, closeModal } = props;

    return (
        <>
            <div className="fixed right-0 w-1/3 h-full">
                <div className="flex h-full w-full bg-white pt-20 pb-10 md:pt-40 md:pb-10 px-5">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col w-full">
                            <div>
                                <XMarkIcon className="w-10 h-10" onClick={closeModal}/>
                            </div>
                            <div>
                                <span className="font-bold text-3xl">
                                    Detail
                                </span>
                            </div>
                            <div>
                                {children}
                            </div>
                        </div>

                        <div className="flex w-full">
                            <Button style="primary" className="w-full">Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarright;