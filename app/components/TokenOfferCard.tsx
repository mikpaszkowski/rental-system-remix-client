import {useLocation, useNavigate} from "@remix-run/react";
import defaultTokenImg from "../../public/images/token/default-token-img.jpg"
import {Button, ButtonSize} from "./Button";
import {useMemo} from "react";
import {DateUtils} from "~/utils/DateUtils";
import avatarFirst from "../../public/images/avatars/avatar-1.png";
import {LineBreak} from "~/components/LineBreak";

export interface ITokenCard {
    id: number | string;
    name: string;
    dailyPrice?: number;
    maxDuration?: number;
    deadline?: Date;
    totalAmount?: number;
    url?: string;
    cardType: CardType;
    currentOwner?: string;
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
    IN_PROGRESS_RENTING = "IN_PROGRESS_RENTING",
    IN_PROGRESS_LENDING = "IN_PROGRESS_LENDING",
}

export const TokenOfferCard = (({dailyPrice, id, maxDuration, name, url, cardType, totalAmount, currentOwner, deadline, onClick}: ITokenCard & { onClick: () => void }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const cardFooter = useMemo(() => {
        let element;
        switch(cardType) {
            case CardType.AWAITING_RENTER:
                element = <>
                    <p className="text-xs mt-1">0FAC3...D6C3A70FA</p>
                <LineBreak />
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="text-primary font-light text-xs mb-1">Daily price</p>
                        <p className="text-primary font-semibold text-md">{dailyPrice} XRP</p>
                    </div>
                    <div className="vertical-line"/>
                    <div>
                        <p className="text-primary font-light text-xs mb-1">Max duration</p>
                        <p className="text-primary font-semibold text-md">{maxDuration} d</p>
                    </div>
                </div>
            </>
                break;
            case CardType.IN_PROGRESS_LENDING:
                element = <>
                    <LineBreak />
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="text-primary font-light text-xs mb-1">Total amount</p>
                            <p className="text-primary font-semibold text-md">{totalAmount} XRP</p>
                        </div>
                        <div className="vertical-line"/>
                        <div>
                            <p className="text-primary font-light text-xs mb-1">Termination date</p>
                            <p className="text-primary font-semibold text-md">{DateUtils.formatDateToShortString(deadline)}</p>
                        </div>
                    </div>
                    <LineBreak />
                    <p className="text-primary font-light text-xs mb-2">Renter</p>
                    <div className="flex flex-row items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <img src={avatarFirst} alt="avatar-img" />
                        </div>
                        <p className="text-primary mr-3 text-sm">rhPEtx...DJYi</p>
                    </div>
                </>
                break;
            case CardType.IN_PROGRESS_RENTING:
                element = <>
                    <LineBreak />
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="text-primary font-light text-xs mb-1">Total amount</p>
                            <p className="text-primary font-semibold text-md">{totalAmount} XRP</p>
                        </div>
                        <LineBreak vertical/>
                        <div>
                            <p className="text-primary font-light text-xs mb-1">Termination date</p>
                            <p className="text-primary font-semibold text-md">{DateUtils.formatDateToShortString(deadline)}</p>
                        </div>
                    </div>
                    <LineBreak />
                    <p className="text-primary font-light text-xs mb-2">Lender</p>
                    <div className="flex flex-row items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                            <img src={avatarFirst} alt="avatar-img" />
                        </div>
                        <p className="text-primary mr-3 text-sm">rhPEtx...DJYi</p>
                    </div>
                </>
                break;
            default:
                element = <Button name="Create offer" onClick={() => navigate(`/account/my-wallet/${id}`)} className="w-full mt-4" buttonSize={ButtonSize.SMALL}/>
        }
        return element;
    }, [cardType, dailyPrice, totalAmount, deadline, maxDuration])


    return (
        <div className="w-56 rounded-xl overflow-hidden mb-10 cursor-pointer" {...(cardType === CardType.AWAITING_RENTER && {onClick: () => navigate(`${location.pathname}/${id}`)})}>
            <div className="token-image-card h-44 overflow-hidden">
                <img src={url || defaultTokenImg} alt="token-image" className="absolute max-w-full"/>
            </div>

            <div className="bg-light-purple px-3 pt-1 pb-4 h-full">
                <p className="text-primary text-normal font-semibold">{name} #{id}</p>
                {cardFooter}
            </div>
        </div>
    )
});