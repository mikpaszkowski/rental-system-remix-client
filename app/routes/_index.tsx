import type {V2_MetaFunction} from "@remix-run/node";
import {Button} from "~/components/Button";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div>
            <div className="mt-40 w-3/5">
                <p className="text-primary text-8xl font-extrabold">discover and rent Tokens on XRPL</p>
                <p className="text-primary text-3xl mt-14">The first solution to give you a chance to own Tokens for a
                    moment
                    or buy forever</p>
                <Button name="Rent Token" className="mt-16" onClick={() => {
                }}/>
            </div>
        </div>

    );
}
