import {Link, useNavigate} from "@remix-run/react"
import {Button} from "./Button"
import {AccountIcon} from "./AccountIcon";

interface INavbarProps {
    isAuthenticated?: boolean;
    address: string
}

export const Navbar = ({isAuthenticated, address}: INavbarProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-between items-end w-full text-primary mb-32 cursor-pointer">
            <Link to='/' className="font-bold text-2xl">Xrent</Link>
            <div className="flex flex-row items-end text-lg">
                {
                    !isAuthenticated ? <>
                        <nav className="mr-16">
                            <ul className="flex flex-row">
                                <li className="mr-10">Discover</li>
                                <li className="mr-10">About</li>
                                <li className="mr-10">Marketplace</li>
                                <li className="mr-10">How it works</li>
                            </ul>
                        </nav>
                        <Button name="Connect Wallet" iconName="ri-wallet-fill" onClick={() => navigate('/auth')}/>
                    </> : <AccountIcon address={address}/>
                }
            </div>
        </div>)
}