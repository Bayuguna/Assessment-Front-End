import { useState } from "react";
import { AuthApi } from "../api/authApi"
import { Routing } from "../../infrastructure/router/router_constant";
import Constant from "../../domain/helpers/constant";
import { setToken } from "../../infrastructure/utils/authUtils";


const useLogin = () => {
    const authApi = new AuthApi();

    const [error, setError] = useState({open: false, message: ""});
    const [dataLogin, setDataLogin] = useState({username: "", password: ""});

    const submitLogin = () => {
        const data = {
            username: dataLogin.username,
            password: dataLogin.password
        }

        setError({open: false, message: ""});

        authApi.login(data).then((res: any) => {
            if(res.status === Constant.HTTP_OK){
                setToken(res.data.data.accessToken);
                window.location.href = Routing.HOME;
            }else{
                setError({open: true, message: res.data?.message});
            }

            // setError({open: true, message: res.data?.message});
        }).catch((err: any) => {
            // setError({open: true, message: err.response.data.message});
        });
    }

    return {
        dataLogin,
        setDataLogin,
        submitLogin,
        error,
        setError
    }
}

export default useLogin;