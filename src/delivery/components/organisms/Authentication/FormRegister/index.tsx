import useRegister from "../../../../../repository/hook/registerHook";
import Button from "../../../atoms/Button";
import Card from "../../../atoms/Card";
import TextInput from "../../../molecules/TextInputVertical";

const FormRegister = () => {

    const {dataRegister, setDataRegister, error, submitRegister} = useRegister()

    return (
        <>
        <Card className="rounded-xl p-6">
                <div className="flex flex-col space-y-6 w-full">
                <h1 className="text-center">Register</h1>
                <div>
                    <TextInput
                    className="w-full"
                    type="text"
                    text="Full Name"
                    placeholder="Full Name"
                    value={dataRegister.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, name: e.target.value})}
                    />
                </div>

                <div>
                    <TextInput
                    className="w-full"
                    type="text"
                    text="Username"
                    placeholder="Username"
                    value={dataRegister.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, username: e.target.value})}
                    />
                </div>

                <div>
                    <TextInput
                    className="w-full"
                    type="email"
                    text="Email"
                    placeholder="Email"
                    value={dataRegister.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, email: e.target.value})}
                    />
                </div>

                <div className="flex flex-row space-x-2">
                    <div className="flex-1">
                        <TextInput
                        className="w-full"
                        type="text"
                        text="Phone"
                        placeholder="Phone Number"
                        value={dataRegister.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, phone: e.target.value})}
                        />
                    </div>

                    <div className="flex-1">
                        <TextInput
                        className="w-full"
                        type="date"
                        text="Birth Date"
                        placeholder="Date of Birth"
                        value={dataRegister.date_birth}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, date_birth: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <TextInput
                    className="w-full"
                    type="password"
                    text="Password"
                    placeholder="Password"
                    value={dataRegister.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, password: e.target.value})}
                    />
                </div>

                <div>
                    <TextInput
                    className="w-full"
                    type="password"
                    text="Confirm Password"
                    placeholder="Confirm Password"
                    value={dataRegister.password_confirmation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRegister({...dataRegister, password_confirmation: e.target.value})}
                    />
                </div>

                <div>
                    <span className={`${error.open ?? 'hidden'}`}>{error.message}</span>
                </div>

                <div>
                <Button
                type="submit"
                className="w-full"
                style="primary-hover"
                onClick={submitRegister}
                >
                Register
                </Button>
                </div>
                </div>
        </Card>
        </>
    );
};

export default FormRegister;
