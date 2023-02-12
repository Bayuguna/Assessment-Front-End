
import Link from "next/link"
import Card from "../../../atoms/Card";
import TextInput from "../../../molecules/TextInputVertical";
import TextField from "../../../atoms/TextField";
import Button from "../../../atoms/Button";
import { Routing } from "../../../../../infrastructure/router/router_constant";
import Logo from "../../../atoms/Logo";
import useLogin from "../../../../../repository/hook/loginHook";
import { useEffect, useState } from "react";

export const FormLogin = () => {

    const {setDataLogin, error, dataLogin, submitLogin} = useLogin()
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(dataLogin.username === "" && dataLogin.password === ""){
            setDisabled(true);
            return;
        }

        setDisabled(false);
    }, [dataLogin]
)

    return (
        <Card className="rounded-2xl px-10 py-20">
                <div className="flex flex-col space-y-6 w-full">
                <div className="flex justify-center items-center py-10">
                    <Logo/>
                </div>
                <div>
                    <TextInput
                    className="w-full"
                    type="text"
                    text="Username"
                    placeholder="Username"
                    value={dataLogin.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataLogin({...dataLogin, username: e.target.value})}
                    />
                </div>

                <div>
                    <TextInput
                    className="w-full"
                    type="password"
                    text="Password"
                    placeholder="Password"
                    value={dataLogin.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataLogin({...dataLogin, password: e.target.value})}
                    />
                </div>

                <div>
                    <TextField
                    type="checkbox"
                    size="small"
                    >
                        <span className="ml-3">Keep loging in?</span>
                    </TextField>
                </div>

                <div className="flex justify-center text-danger">
                    <span className={`${error.open ?? 'hidden'}`}>{error.message}</span>
                </div>

                <div className="pt-10">
                        <Button
                            disabled={disabled}
                            type="submit"
                            className="w-full rounded-md"
                            style="primary-hover"
                            onClick={submitLogin}
                            >
                            <div className="font-bold">
                                Log In
                            </div>
                        </Button>
                </div>
                <div>
                    <Button
                        className="w-full rounded-md"
                        >
                        <div className="font-bold">
                            Back To Home
                        </div>
                    </Button>
                </div>
                {/* <div className="flex justify-center">
                    <span>OR</span>
                </div>
                <div className="flex justify-center space-x-4">
                    <div>
                        <AButton className="bg-white w-12 h-12 p-3" theme="rounded" size="none">
                            <Image src={`/icons/google.png`} width={100} height={100} alt="Google"/>
                        </AButton>
                    </div>
                    <div>
                        <AButton className="bg-white w-12 h-12 p-3" theme="rounded" size="none">
                            <Image src={`/icons/facebook.png`} className="object-fill" width={100} height={100} alt="Google"/>
                        </AButton>
                    </div>
                    <div>
                        <AButton className="bg-white w-12 h-12 p-3" theme="rounded" size="none">
                            <Image src={`/icons/apple.png`} className="object-fill" width={100} height={100} alt="Google"/>
                        </AButton>
                    </div>
                </div> */}
                </div>
        </Card>
    )
}