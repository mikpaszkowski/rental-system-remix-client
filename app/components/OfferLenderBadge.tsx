import avatarFirst from "../../public/images/avatars/avatar-1.png";

export const OfferLenderBadge = () => {
    return <div
        className="flex flex-row justify-between items-center bg-regular-purple h-12 lender-account-label border-regular-purple border- rounded-md overflow-hidden">
        <div
            className="flex flex-col justify-center items-center bg-light-purple h-full px-3 font-light border-regular-purple border-2 rounded-l-md">
            Lender
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden mx-2">
            <img src={avatarFirst} alt="avatar-img"/>
        </div>
        <p className="mr-4">r3WkL...6jWFZR</p>
    </div>;
}
