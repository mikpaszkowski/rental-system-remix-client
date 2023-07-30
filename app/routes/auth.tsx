import { Outlet, useNavigate } from "@remix-run/react"
import { useState } from "react";
import { Button } from "~/components/Button";

interface ICredentials {
    account: string;
    secret: string;
}

const AuthRoute = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<ICredentials>({
        account: "",
        secret: "",
    });

    const onSubmit = () => {
        console.log(credentials);
        navigate('/offers');
    }
    return (
        <div className="absolute flex flex-col justify-center items-center bg-shadow top-0 left-0 h-screen w-screen">
            <div className="flex flex-col justify-center items-center w-80">
                <input type="text" className="w-full bg-primary h-11 mb-6 rounded-md px-4 text-secondary font-light placeholder:text-secondary" placeholder="Account" onChange={(event) => setCredentials(prevState => {
                    return {
                        ...prevState,
                        account: event.target.value,
                    }
                })}/>
                <input type="password" className="w-full bg-primary h-11 mb-6 rounded-md px-4 text-secondary font-light placeholder:text-secondary" placeholder="Secret" onChange={(event) => setCredentials(prevState => {
                    return {
                        ...prevState,
                        secret: event.target.value,
                    }
                })}/>
                <div className="w-full flex flex-row">
                <Button name="Cancel" onClick={() => navigate('/')} className="w-full mt-2 mr-3" secondary/>
                <Button type="submit" name="Connect" onClick={onSubmit} className="w-full mt-2"/>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthRoute;