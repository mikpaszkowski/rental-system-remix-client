import {json, LoaderArgs} from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";
import defaultTokenImg from "../../public/images/token/default-token-img.jpg"
import {Button} from "~/components/Button";
import avatarFirst from "../../public/images/avatars/avatar-1.png";

export const loader = async ({params}: LoaderArgs) => {
    return json({offerId: params.offerId});
};

const OfferRoute = () => {
    const {offerId} = useLoaderData<typeof loader>();
    return (
        <div
            className="absolute top-0 right-0 h-full w-1/2 bg-dialog text-primary border-light-purple border-2 rounded-l-xl overflow-hidden">
            <div className="relative flex flex-col justify-between w-full h-full">
                <div className="relative h-1/2 w-full">
                    <Link to="/offers" className="absolute right-3 top-3 text-4xl"><i
                        className="ri-close-fill"></i></Link>
                    <img src={defaultTokenImg} alt="token image" className="h-96 elem-center"/>
                </div>
                <div className="bg-light-purple w-full h-1/2 py-8 px-24">
                    <div className="flex flex-row justify-between">
                        <div className="mr-4">
                            <p className="text-3xl font-semibold">Marble Face #{offerId}</p>
                            <p className="text-sm font-light mt-5">0FAC3...D6C3A70FA</p>
                        </div>
                        <div
                            className="flex flex-row justify-between items-center bg-regular-purple h-12 lender-account-label border-regular-purple border- rounded-md overflow-hidden">
                            <div
                                className="flex flex-col justify-center items-center bg-light-purple h-full px-3 font-light border-regular-purple border-2 rounded-l-md">
                                Lender
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden mx-2">
                                <img src={avatarFirst} alt="avatar-img"/>
                            </div>
                            <p className="mr-4">r3WkL...6jWFZR</p>
                        </div>
                    </div>
                    <input type="number"
                           className="w-full bg-primary h-12 rounded-md px-4 text-secondary font-light placeholder:text-secondary mt-16"
                           placeholder="Rental days" onChange={(event) => setCredentials(prevState => {
                        return {
                            ...prevState,
                            account: event.target.value,
                        }
                    })}/>
                    <p className="text-sm mt-3 ml-3">Maximal number of days to rent: 10</p>
                    <div className="mt-16">
                        <div className="w-full flex flex-row justify-between">
                            <p className="text-sm font-light">Daily price</p>
                            <p className="text-base font-semibold">500 XRP</p>
                        </div>
                        <hr className="text-primary my-2"/>
                        <div className="w-full flex flex-row justify-between mt-6">
                            <p className="text-sm font-light">Total amount</p>
                            <p className="text-base font-semibold">0 XRP</p>
                        </div>
                    </div>
                    <Button name="Request rental" onClick={() => {
                    }} className="w-full mt-16"/>
                </div>
            </div>
        </div>
    )
}

export default OfferRoute;