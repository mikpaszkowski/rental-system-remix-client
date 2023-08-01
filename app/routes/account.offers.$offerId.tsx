import {useLoaderData} from "@remix-run/react";
import {Button} from "~/components/Button";
import {json, LoaderArgs} from "@remix-run/node";
import {OfferLenderBadge} from "~/components/OfferLenderBadge";
import {TokenNameInfo} from "~/components/TokenNameInfo";
import {LineBreak} from "~/components/LineBreak";
import {SummaryValueLine} from "~/components/offer/SummaryValueLine";
import {SlideInDialogWrapper} from "~/components/SlideInDialogWrapper";
import {DialogTopImageHeader} from "~/components/DialogTopImageHeader";
import {DialogBottomWrapper} from "~/components/DialogBottomWrapper";
import {InputBottomLabel} from "~/components/InputBottomLabel";

export const loader = async ({params}: LoaderArgs) => {
    return json({offerId: params.offerId});
};

const AccountOfferDetailsRoute = () => {
    const {offerId} = useLoaderData<typeof loader>();

    return (
        <SlideInDialogWrapper>
            <DialogTopImageHeader/>
            <DialogBottomWrapper>
                <div className="flex flex-row justify-between">
                    <TokenNameInfo offerId={offerId}
                                   tokenId="0D15133A91686C5FA3D9F78BA5AAB9942056CDF4E45C4FAF709D7505E29D1FC9"/>
                    <OfferLenderBadge/>
                </div>
                <input type="number"
                       className="w-full bg-primary h-12 rounded-md px-4 text-secondary font-light placeholder:text-secondary mt-8"
                       placeholder="Rental days" onChange={(event) => setCredentials(prevState => {
                    return {
                        ...prevState,
                        account: event.target.value,
                    }
                })}/>
                <InputBottomLabel content="Maximal number of days to rent: 10"/>
                <div className="mt-6">
                    <SummaryValueLine name="Daily price" value={500}/>
                    <LineBreak/>
                    <SummaryValueLine name="Total amount" value={0} className="mt-4"/>
                </div>
                <Button name="Request rental" onClick={() => {
                }} className="w-full mt-6"/>
            </DialogBottomWrapper>
        </SlideInDialogWrapper>)
}

export default AccountOfferDetailsRoute;