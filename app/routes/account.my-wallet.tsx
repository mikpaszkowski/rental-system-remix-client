import {CardType, ITokenCard} from "~/components/TokenOfferCard";
import {TokenCardList} from "~/components/TokenCardList";
import {Outlet} from "@remix-run/react";

const tokenList: ITokenCard[] = [
    {
        name: "Marble Face",
        id: 123,
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Flying Stone",
        id: "abc456",
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Token Name",
        id: 789,
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Unique Token",
        id: "xyz123",
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Some Token",
        id: 456,
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Black Token",
        id: "def789",
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Retro Item",
        id: 789,
        cardType: CardType.NO_OFFER,
    },
    {
        name: "Old Head",
        id: "mno234",
        cardType: CardType.NO_OFFER,
    },
];
const MyWalletRoute = () => {
    return (
        <div>
            <TokenCardList items={tokenList} />
            <Outlet />
        </div>
    )
}

export default MyWalletRoute;