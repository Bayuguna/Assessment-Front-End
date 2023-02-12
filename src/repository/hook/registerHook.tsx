import { useState } from "react";
import { AuthApi } from "../api/authApi"
import { Routing } from "../../infrastructure/router/router_constant";
import Constant from "../../domain/helpers/constant";
import { setToken } from "../../infrastructure/utils/authUtils";


const useRegister = () => {
    const authApi = new AuthApi();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({open: false, message: ""});
    const [dataRegister, setDataRegister] = useState({name:"", username: "", email: "", phone: "", date_birth: "", password: "", password_confirmation: ""});

    const submitRegister = () => {
        const data = {
            name: dataRegister.name,
            username: dataRegister.username,
            email: dataRegister.email,
            phone: dataRegister.phone,
            date_birth: dataRegister.date_birth,
            password: dataRegister.password
        }

        authApi.register(data).then((res: any) => {
            console.log(data)
            if(dataRegister.password !== dataRegister.password_confirmation){
                setError({open: true, message: "Password not match"});
            }

            if(res.status === Constant.HTTP_OK){
                window.location.href = Routing.AUTH;
            }
            
            setError({open: true, message: res.data?.message});
            setLoading(false);
        }).catch((err: any) => {
            // setError({open: true, message: err.response.data.message});
            setLoading(false);
        });
    }

    return {
        dataRegister,
        setDataRegister,
        submitRegister,
        loading,
        setLoading,
        error,
        setError
    }
}

export default useRegister;