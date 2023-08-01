import {json, LoaderArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {Button} from "~/components/Button";
import {DialogTopImageHeader} from "~/components/DialogTopImageHeader";
import {TokenNameInfo} from "~/components/TokenNameInfo";
import {SlideInDialogWrapper} from "~/components/SlideInDialogWrapper";

export const loader = async ({params}: LoaderArgs) => {
    return json({offerId: params.offerId});
};
const AccountTokenFormRoute = () => {
    const {offerId} = useLoaderData<typeof loader>();

    return (
        <SlideInDialogWrapper>
            <DialogTopImageHeader/>
            <div className="bg-light-purple w-full h-1/2 py-8 px-24">
                <TokenNameInfo offerId={offerId}
                               tokenId="0D15133A91686C5FA3D9F78BA5AAB9942056CDF4E45C4FAF709D7505E29D1FC9"/>
                <div className="mt-10">
                    <input type="number"
                           className="w-full bg-primary h-12 rounded-md px-4 text-secondary font-light placeholder:text-secondary mt-16"
                           placeholder="Maximal rental days" onChange={(event) => setCredentials(prevState => {
                        return {
                            ...prevState,
                            account: event.target.value,
                        }
                    })}/>
                    <input type="number"
                           className="w-full bg-primary h-12 rounded-md px-4 text-secondary font-light placeholder:text-secondary mt-5"
                           placeholder="Daily rental price" onChange={(event) => setCredentials(prevState => {
                        return {
                            ...prevState,
                            account: event.target.value,
                        }
                    })}/>
                    <Button name="Create offer" onClick={() => {
                    }} className="w-full mt-16"/>
                </div>
            </div>
        </SlideInDialogWrapper>
    )
}

export default AccountTokenFormRoute;