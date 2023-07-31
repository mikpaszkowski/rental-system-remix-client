import { Outlet } from "@remix-run/react";

const AccountRoute = () => {
    return (
        <div>
            <div className="flex flex-row justify-between border-primary border-2 px-8 pb-8 py-4 rounded-md">
                <div>
                    <p className="text-sm font-light">Account Balance</p>
                    <p className="text-5xl font-bold mt-5">123 000</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-light">Income</p>
                    <p className="text-5xl font-bold mt-5">+ 1230</p>
                </div>
                <div className="flex flex-row w-44 justify-evenly text-center">
                    <div>
                        <p className="text-sm font-light">Lending</p>
                        <p className="text-5xl font-bold mt-5">4</p>
                    </div>
                    <div>
                        <p className="text-sm font-light">Renting</p>
                        <p className="text-5xl font-bold mt-5">0</p>
                    </div>
                </div>
            </div>
            
            <Outlet />
        </div>
    )
}


export default AccountRoute;