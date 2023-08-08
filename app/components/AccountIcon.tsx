import avatarFirst from "../../public/images/avatars/avatar-1.png"
import {Form, useNavigate} from "@remix-run/react"
import {StringUtils} from "~/utils/StringUtils";
import {useState} from "react";

export interface IAccountIconProps {
    address?: string;
}

export const AccountIcon = ({address}: IAccountIconProps) => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="relative flex flex-col">
            <div className="flex flex-row items-center cursor-pointer border-primary border p-2 rounded-md"
                 onClick={() => setShowDropdown(!showDropdown)}>
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <img src={avatarFirst} alt="avatar-img"/>
                </div>
                <p className="text-primary mr-3">{StringUtils.truncateString(address || '', 6, 4)}</p>
            </div>
            {
                showDropdown ? <div className="absolute mt-2 rounded-md bg-light-purple w-full top-12 left-0">
                    <p className="cursor-pointer p-3 hover:bg-regular-purple rounded-t-md w-full border border-white"
                       onClick={() => navigate('/account')}>Account</p>
                    <Form method="post">
                        <button
                            className="cursor-pointer p-3 hover:bg-regular-purple rounded-b-md w-full text-left">Disconnect
                        </button>
                    </Form>
                </div> : null
            }
        </div>
    )
}