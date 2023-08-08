import {Button} from "~/components/Button";
import {Form, useLoaderData} from "@remix-run/react";
import type {ActionArgs, LoaderArgs} from "@remix-run/node";
import { json} from "@remix-run/node";
import {commitSession, getSession} from "../../sessions/session";
import {redirect} from "@remix-run/router";

export const action = async ({request}: ActionArgs) => {
    const session = await getSession(
        request.headers.get("Cookie")
    );
    const accountAddress = session.get('accountAddress');
    const secret = session.get('secret');

    if (!accountAddress || !secret) {
        return redirect('/account')
    }
    let API = 'http://localhost:8080/api'
    let response = await fetch(`${API}/account/${accountAddress}/config`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            "accountNumber": accountAddress,
            "secret": secret
        })
    })
    console.log(response);

    if (response.ok) {
        session.set('hasRentalHook', true);
        return redirect('/account', {
            headers: {
                'Set-Cookie': await commitSession(session),
            }
        })
    } else {
        session.flash("error", "Failure on install the Rental Hook");
        return redirect('/auth/hook', {
            headers: {
                'Set-Cookie': await commitSession(session),
            }
        })
    }
}

export async function loader({request}: LoaderArgs) {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    const data = {error: session.get("error")};

    if (session.has('error')) {
        return json(data, {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    }
    if (session.has('hasRentalHook')) {
        return redirect('/account')
    }

    return {};
}

const AuthHookRoute = () => {
    const {error} = useLoaderData<typeof loader>();
    return (
        <div className="absolute flex flex-col justify-center items-center bg-shadow top-0 left-0 h-screen w-screen">
            <div className="flex flex-col justify-center items-center border-2 border-light-purple p-7 rounded-md">
                <Form method="post">
                    <p className="text-xl">In order to use the system you have to set up a Rental Hook on your
                        Account</p>
                    <Button type="submit" name="Install Hook" className="mt-10 float-right"/>
                </Form>
                {
                    error ? <div
                        className="absolute bottom-0 flex flex-row items-center w-full border-2 border-light-purple text-primary mt-5 p-3 opacity-80 rounded-sm">
                        <i className="ri-error-warning-line text-light-purple text-xl mr-2"></i>
                        <p>{error}</p>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default AuthHookRoute;