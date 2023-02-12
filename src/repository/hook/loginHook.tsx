import { useState } from "react";
import { AuthApi } from "../api/authApi"
import { Routing } from "../../infrastructure/router/router_constant";
import Constant from "../../domain/helpers/constant";
import { setToken } from "../../infrastructure/utils/authUtils";


const useLogin = () => {
    const authApi = new AuthApi();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({open: false, message: ""});
    const [dataLogin, setDataLogin] = useState({username: "", password: ""});

    const submitLogin = () => {
        const data = {
            username: dataLogin.username,
            password: dataLogin.password
        }


        authApi.login(data).then((res: any) => {
            console.log(res.data.data.accessToken)
            if(res.status === Constant.HTTP_OK){
                setToken(res.data.data.accessToken);
                window.location.href = Routing.HOME;
            }
            setError({open: true, message: res.data?.message});
            setLoading(false);
        }).catch((err: any) => {
            // setError({open: true, message: err.response.data.message});
            setLoading(false);
        });
    }

    return {
        dataLogin,
        setDataLogin,
        submitLogin,
        loading,
        setLoading,
        error,
        setError
    }
}

export default useLogin;