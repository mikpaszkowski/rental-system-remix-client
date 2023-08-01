import {CardType, ITokenCard} from "~/components/TokenOfferCard";
import {TokenCardList} from "~/components/TokenCardList";
import {Outlet} from "@remix-run/react";

const tokenOfferCards: ITokenCard[] = [
    {
        name: "Marble Face",
        id: 123,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_RENTING,
    },
    {
        name: "Flying Stone",
        id: "abc456",
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_RENTING,
    },
    {
        name: "Token Name",
        id: 789,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_RENTING,
    },
    {
        name: "Unique Token",
        id: "xyz123",
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_RENTING,
    },
    {
        name: "Some Token",
        id: 456,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_RENTING,
    },
];
const RentingRoute = () => {
    return (
        <div>
            <TokenCardList items={tokenOfferCards} />
            <Outlet />
        </div>
    )
}

export default RentingRoute;