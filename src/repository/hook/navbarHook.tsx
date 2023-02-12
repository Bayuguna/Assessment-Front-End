import { useEffect, useState } from "react";
import { getProfile, removeToken } from "../../infrastructure/utils/authUtils";
import { Routing } from "../../infrastructure/router/router_constant";


const useNavbar = () => {
    const [profile, setProfile] = useState<any>();
    const [menu, setMenu] = useState(false);
    const [dialogConfirmLogout, setDialogConfirmLogout] = useState(false);

    useEffect(() => {
        const dataProfile = getProfile();
        setProfile(dataProfile);
    }, []);

    const handleLogout = () => {
        removeToken();
        window.location.href = Routing.AUTH;
    };

    return {
        profile,
        handleLogout,
        menu,
        setMenu,
        dialogConfirmLogout,
        setDialogConfirmLogout
    }
};

export default useNavbar;