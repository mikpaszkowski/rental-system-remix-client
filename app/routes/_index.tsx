import type {V2_MetaFunction, LoaderArgs, LoaderFunction} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import {Button} from "~/components/Button";
import {getSession} from "../../sessions/session";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export const loader: LoaderFunction = async ({request}: LoaderArgs) => {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    if (session.has('accountAddress')) {
        return redirect('/account')
    }
    return json({
        ok: true
    })
}

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
