import { Link } from "@remix-run/react"
import { Button } from "./Button"
import { AccountIcon } from "./AccountIcon";

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-end w-full text-primary mb-32 cursor-pointer">
            <Link to='/' className="font-bold text-2xl">Xrent</Link>
            <div className="flex flex-row items-end text-lg">

                {/* <Button name="Connect Wallet" iconName="ri-wallet-fill" onClick={() => navigate('/auth')} /> */}
                <div>
                    <AccountIcon />
                </div>
            </div>
        </div>)
}