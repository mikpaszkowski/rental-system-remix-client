import { useNavigate, useNavigation } from "@remix-run/react";
import defaultTokenImg from "../../public/images/token/default-token-img.jpg"
import { Button, ButtonSize } from "./Button";

export interface ITokenOfferCardProps {
    name: string;
    id: number | string;
    dailyPrice: number;
    maxDuration: number;
    url?: string;
    cardType: CardType;
}

enum RentalStatus {
    RENTAL_REQUESTED = 'RENTAL_REQUESTED',
    CONFIRMED = 'CONFIRMED',
    ONGOING = 'ONGOING',
    RETURN_REQUESTED = 'RETURN_REQUESTED',
    FINISHED = 'FINISHED',
}

export enum CardType {
    AWAITING_RENTER = "AWAITING_RENTER",
    NO_OFFER = "NO_OFFER",
    IN_PROGRESS = "IN_PROGRESS",
}

export const TokenOfferCard = (({ dailyPrice, id, maxDuration, name, url, cardType }: ITokenOfferCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="w-56 rounded-xl overflow-hidden mb-10 cursor-pointer" onClick={() => navigate(`/offers/${id}`)}>
            <div className="token-image-card h-44 overflow-hidden">
                <img src={url || defaultTokenImg} alt="token-image" className="absolute max-w-full" />
            </div>

            <div className="bg-light-purple px-3 pt-1 pb-2 h-full">
                <p className="text-primary text-normal font-semibold">{name} #{id}</p>
                <p className="text-xs mt-1">0FAC3...D6C3A70FA</p>

                {
                    cardType !== CardType.NO_OFFER ?
                        <>
                            <hr className="text-primary my-2" />
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p className="text-primary font-light text-xs mb-1">Daily price</p>
                                    <p className="text-primary font-bold text-xs">{dailyPrice} XRP</p>
                                </div>
                                <div className="vertical-line" />
                                <div>
                                    <p className="text-primary font-light text-xs mb-1">Max duration</p>
                                    <p className="text-primary font-bold text-xs">{maxDuration} d</p>
                                </div>
                            </div>
                        </>
                        : <Button name="Create offer" onClick={() => { }} className="w-full mt-4" buttonSize={ButtonSize.SMALL} />
                }
            </div>
        </div>
    )
});