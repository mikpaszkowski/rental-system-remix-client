import avatarFirst from "../../public/images/avatars/avatar-1.png"
import avatarSecond from "../../public/images/avatars/avatar-2.png"
import avatarThrid from "../../public/images/avatars/avatar-3.png"
import avatarFourth from "../../public/images/avatars/avatar-4.png"
import avatarFith from "../../public/images/avatars/avatar-5.png"
import avatarSixth from "../../public/images/avatars/avatar-6.png"
import avatarSeventh from "../../public/images/avatars/avatar-7.png"
import avatarEighth from "../../public/images/avatars/avatar-8.png"
import avatarNineth from "../../public/images/avatars/avatar-9.png"
import avatarTenth from "../../public/images/avatars/avatar-10.png"
import avatarEleventh from "../../public/images/avatars/avatar-11.png"
import avatarTwelveth from "../../public/images/avatars/avatar-12.png"
import { useNavigate } from "@remix-run/react"
import {StringUtils} from "~/utils/StringUtils";
import {useSnapshot} from "valtio";
import {store} from "~/state/proxy";


export const AccountIcon = () => {
    const navigate = useNavigate();
    const {account: { address }} = useSnapshot(store);
    return (
        <div className="flex flex-row items-center cursor-pointer border-primary border p-2 rounded-md" onClick={() => navigate('/account')}>
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                <img src={avatarFirst} alt="avatar-img" />
            </div>
            <p className="text-primary mr-3">{StringUtils.truncateString(address || '',6, 4)}</p>
        </div>

    )
}