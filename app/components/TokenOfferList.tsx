import { CardType, ITokenOfferCardProps, TokenOfferCard } from "./TokenOfferCard";


const tokenOfferCards: ITokenOfferCardProps[] = [
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
    {
      name: "Black Token",
      id: "def789",
      dailyPrice: 25,
      maxDuration: 120,
      cardType: CardType.AWAITING_RENTER,
    },
    {
      name: "Retro Item",
      id: 789,
      dailyPrice: 14,
      maxDuration: 60,
      cardType: CardType.AWAITING_RENTER,
    },
    {
      name: "Old Head",
      id: "mno234",
      dailyPrice: 22,
      maxDuration: 90,
      cardType: CardType.AWAITING_RENTER,
    },
  ];


export const TokenOfferList = () => {
        return (
            <div className="grid grid-cols-4 gap-4 mt-28 justify-items-center">
                {
                    tokenOfferCards.map((token) => (
                        <TokenOfferCard {...token}/>
                    ))
                }
            </div>
        )
}