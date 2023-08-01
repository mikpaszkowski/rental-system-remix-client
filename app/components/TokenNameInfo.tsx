import {StringUtils} from "~/utils/StringUtils";

export const TokenNameInfo = ({offerId, tokenId}: { offerId: string; tokenId: string; }) => {
    return <div className="mr-4">
        <p className="text-3xl font-semibold">Marble Face #{offerId}</p>
        <p className="text-sm font-light mt-5">{StringUtils.truncateString(tokenId)}</p>
    </div>;
}