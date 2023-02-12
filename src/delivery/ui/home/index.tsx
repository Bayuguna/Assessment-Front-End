import Link from "next/link";
import { Routing } from "../../../infrastructure/router/router_constant";
import { useEffect, useState } from "react";
import { getProfile } from "../../../infrastructure/utils/authUtils";


const HomePage = () => {
    const [username, setUsername] = useState<string>("");
    useEffect(() => {
        setUsername(getProfile()?.username);
    })
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <h1>Welcome To Assessment,
                {username ? `Mr/Mrs ${username}` : <Link className="underline"  href={Routing.AUTH}>Sign In</Link>}
            </h1>
        </div>
    );
};

export default HomePage;