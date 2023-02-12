import { useState } from "react";
import { FormLogin } from "../../components/organisms/Authentication/FormLogin";
import FormRegister from "../../components/organisms/Authentication/FormRegister";
import Card from "../../components/atoms/Card";
import Button from "../../components/atoms/Button";

export const AuthenticationPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="relative flex w-full h-screen justify-center items-center">
                <div className="flex flex-col w-full px-8 md:w-1/3 sm:justify-center">
                <div className="flex flex-row justify-center space-x-2">
                    <Card className="flex p-2 mb-5 shadow-md rounded-full">
                        <div>
                            <Button
                            size="medium"
                            className="w-full rounded-full"
                            style={isLogin === true ? "primary-hover" : ""}
                            onClick={() => setIsLogin(true)}
                            >
                            Login
                            </Button>
                        </div>
                        <div>
                            <Button
                            size="medium"
                            className="w-full rounded-full"
                            style={isLogin === false ? "primary-hover" : ""}
                            onClick={() => setIsLogin(false)}
                            >
                            Register
                            </Button>
                        </div>
                    </Card>
                </div>
                {isLogin ? <FormLogin /> : <FormRegister />}
            </div>
    </div>
    
    )
}