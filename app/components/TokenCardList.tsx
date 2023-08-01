import {ITokenCard, TokenOfferCard} from "./TokenOfferCard";

export const TokenCardList = ({items}: { items: ITokenCard[] }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-28 justify-items-center">
            {
                items.map((token, index) => (
                    <TokenOfferCard key={index} {...token}/>
                ))
            }
        </div>
    )
}