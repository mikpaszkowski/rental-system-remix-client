import defaultTokenImg from "../../public/images/avatars/default-token-img.png"

export interface ITokenOfferCardProps {
    name: string;
    id: number | string;
    dailyPrice: number;
    maxDuration: number;
    url?: string;
}

export const TokenOfferCard = (({dailyPrice, id, maxDuration, name, url}: ITokenOfferCardProps) => {
    return (
        <div className="w-56 rounded-xl overflow-hidden mb-10">
            <div className="token-image-card">
                <img src={url || defaultTokenImg} alt="token-image" className="max-w-full"/>
            </div>

            <div className="bg-light-purple px-3 pt-1 pb-2">
                <p className="text-primary text-normal font-semibold">{name} #{id}</p>
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
            </div>
        </div>
    )
});