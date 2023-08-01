import {CardType, ITokenCard} from "~/components/TokenOfferCard";
import {TokenCardList} from "~/components/TokenCardList";
import {Outlet} from "@remix-run/react";

const tokenOfferCards: ITokenCard[] = [
    {
        name: "Marble Face",
        id: 123,
        dailyPrice: 10,
        maxDuration: 30,
        cardType: CardType.AWAITING_RENTER,
    },
    {
        name: "Flying Stone",
        id: "abc456",
        dailyPrice: 15,
        maxDuration: 60,
        cardType: CardType.AWAITING_RENTER,
    },
    {
        name: "Token Name",
        id: 789,
        dailyPrice: 20,
        maxDuration: 90,
        cardType: CardType.AWAITING_RENTER,
    },
    {
        name: "Unique Token",
        id: "xyz123",
        dailyPrice: 12,
        maxDuration: 45,
        cardType: CardType.AWAITING_RENTER,
    },
    {
        name: "Some Token",
        id: 456,
        dailyPrice: 18,
        maxDuration: 75,
        cardType: CardType.AWAITING_RENTER,
    },
];

const AccountOffersRoute = () => {
    return (
        <div>
            <TokenCardList items={tokenOfferCards}/>
            <Outlet />
        </div>
    )
}

export default AccountOffersRoute;