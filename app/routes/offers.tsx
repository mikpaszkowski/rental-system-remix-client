import { Outlet } from "@remix-run/react";
import { Button } from "~/components/Button";
import { ListNavbar } from "~/components/ListNavbar";
import { TokenOfferCard } from "~/components/TokenOfferCard";
import { TokenOfferList } from "~/components/TokenOfferList";

const OffersRoute = () => {
    return (
        <div>
            <ListNavbar />
        <TokenOfferList />
            <Outlet />
        </div>
    )
}

export default OffersRoute;