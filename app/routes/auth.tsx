import {Form, Outlet, useActionData, useNavigate, useNavigation} from "@remix-run/react"
import {Button} from "~/components/Button";
import type {ActionArgs, LoaderArgs} from "@remix-run/node";
import type { XRPL_Account} from "xrpl-accountlib";
import {derive} from "xrpl-accountlib";
import {json, redirect} from "@remix-run/router";
import {commitSession, getSession} from "../../sessions/session";

export interface AccountInfoDto {
    address: string;
    balance: number;
    numOfOffers: number;
    numOfRentals: number;
    hasRentalHookInstalled: boolean;
}

export let action = async ({request}: ActionArgs) => {
    let formData = await request.formData();
    const session = await getSession(
        request.headers.get("Cookie")
    );
    let secret = formData.get('secret') as string;
    if (!secret) {
        return json({error: 'You must provide a secret'}, {status: 422})
    }

    let account: XRPL_Account | null;
    try {
        account = derive.familySeed(secret);
    } catch (err) {
        if (err?.message) {
            return json({error: err.message}, {status: 422})
        } else {
            console.log(err);
        }
        return json({error: 'Error occurred on connection'}, {status: 422})
    }

    if (!account || !account.secret.familySeed) {
        return json({error: 'Could not connect to the account'}, {status: 422})
    }

    let API = 'http://localhost:8080/api'
    let response = await fetch(`${API}/account/${account.address}/info`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    if (!response.ok) {
        return json({error: 'Service failed to connect the account'}, {status: 422})
    }
    let info = await response.json() as AccountInfoDto;
    session.set('accountAddress', info.address);
    session.set('secret', account.secret.familySeed);
    if (info.hasRentalHookInstalled) {
        session.set('hasRentalHook', true);
        return redirect("/account", {
            headers: {
                "Set-Cookie": await commitSession(session),
            }
        });
    }
    return redirect('/auth/hook', {
        headers: {
            "Set-Cookie": await commitSession(session),
        }
    })
}

export async function loader({request}: LoaderArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );
    if (session.has('accountAddress')) {
        return redirect('/account', {
            headers: {
                "Set-Cookie": await commitSession(session),
            }
        })
    }
    const data = {error: session.get("error")};
    return json(data, {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
}

const AuthRoute = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const data = useActionData<typeof action>();
    return (
        <div className="absolute flex flex-col justify-center items-center bg-shadow top-0 left-0 h-screen w-screen">
            <div className="relative flex flex-col justify-center items-center w-80 h-96">
                <Form method="post">
                    <fieldset disabled={navigation.state === "submitting"}>
                        <input type="text" name="name"
                               className="w-full bg-primary h-12 mb-6 rounded-md px-4 text-secondary font-light placeholder:text-secondary"
                               placeholder="Account name (Optional)"/>
                        <input type="password"
                               className="w-full bg-primary h-12 mb-6 rounded-md px-4 text-secondary font-light placeholder:text-secondary"
                               placeholder="Secret" name="secret"/>
                    </fieldset>

                    <div className="w-full flex flex-row">
                        <Button name="Cancel" onClick={() => navigate(-1)} className="w-full mt-2 mr-3" secondary/>
                        <Button type="submit" name="Connect" className="w-full mt-2"/>
                    </div>
                </Form>
                {
                    data && data.error ? <div
                        className="absolute bottom-0 flex flex-row items-center w-full border-2 border-light-purple text-primary mt-5 p-3 opacity-80 rounded-sm">
                        <i className="ri-error-warning-line text-light-purple text-xl mr-2"></i>
                        <p>{data?.error}</p>
                    </div> : null
                }
            </div>
            <Outlet/>
        </div>
    )
}

export default AuthRoute;