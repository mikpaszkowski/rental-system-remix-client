import {Link} from "@remix-run/react";
import defaultTokenImg from "../../public/images/token/default-token-img.jpg";

export const DialogTopImageHeader = ({url}: { url?: string }) => {
    return <div className="relative h-1/2 w-full">
        <Link to="/account/offers" className="absolute right-3 top-3 text-4xl"><i
            className="ri-close-fill"></i></Link>
        <img src={url || defaultTokenImg} alt="token image" className="h-72 elem-center"/>
    </div>
}