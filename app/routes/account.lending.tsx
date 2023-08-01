import {CardType, ITokenCard} from "~/components/TokenOfferCard";
import {TokenCardList} from "~/components/TokenCardList";
import {Outlet} from "@remix-run/react";

const tokenOfferCards: ITokenCard[] = [
    {
        name: "Marble Face",
        id: 123,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_LENDING,
    },
    {
        name: "Flying Stone",
        id: "abc456",
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_LENDING,
    },
    {
        name: "Token Name",
        id: 789,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_LENDING,
    },
    {
        name: "Unique Token",
        id: "xyz123",
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_LENDING,
    },
    {
        name: "Some Token",
        id: 456,
        deadline: new Date('2023-09-12T12:12:32Z'),
        totalAmount: 1200,
        cardType: CardType.IN_PROGRESS_LENDING,
    },
];

const LendingRoute = () => {
    return (
        <div>
            <TokenCardList items={tokenOfferCards} />
            <Outlet />
        </div>
    )
}

export default LendingRoute;