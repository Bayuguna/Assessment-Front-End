import { useEffect } from "react";
import { AuthenticationPage } from "../../src/delivery/ui/authentication/authentication"
import { Routing } from "../../src/infrastructure/router/router_constant";
import { getToken } from "../../src/infrastructure/utils/authUtils";

const  Authentication = () => {

    useEffect(() => {
        const token = getToken();
        console.log('authToken', token)
        if(token){
            window.location.href = Routing.HOME;
        }
    })
    return(
        <AuthenticationPage/>
    )
}

export default Authentication;