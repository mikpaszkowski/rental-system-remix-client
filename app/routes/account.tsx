import {NavLink, Outlet} from "@remix-run/react";

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
            <div className="flex flex-row justify-start mt-14">
                <NavLink to="/account/my-wallet" className="border-primary border-2 rounded-md px-3 py-2 mr-6">My
                    Wallet</NavLink>
                <NavLink to="/account/lending"
                         className="border-primary border-2 rounded-md px-3 py-2 mr-6">Lending</NavLink>
                <NavLink to="/account/renting"
                         className="border-primary border-2 rounded-md px-3 py-2 mr-6">Renting</NavLink>
                <NavLink to="/account/offers"
                         className="border-primary border-2 rounded-md px-3 py-2 mr-6">Offers</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}


export default AccountRoute;