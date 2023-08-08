import type {ActionArgs, LinksFunction, LoaderArgs, LoaderFunction} from "@remix-run/node";
import {json, redirect} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useLocation,
} from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css"
import type {LinkDescriptor} from "@remix-run/server-runtime/dist/links";
import {Navbar} from "./components/Navbar";
import {commitSession, destroySession, getSession} from "../sessions/session";

export const loader: LoaderFunction = async ({request}: LoaderArgs) => {
    const session = await getSession(
        request.headers.get("Cookie")
    );

    return json({
        address: session.get('accountAddress'),
    }, {
        headers: {
            'Set-Cookie': await commitSession(session),
        }
    });
}

export const action = async ({request}: ActionArgs) => {
    const session = await getSession(
        request.headers.get("Cookie")
    );
    return redirect('/', {
        headers: {
            'Set-Cookie': await destroySession(session),
        }
    })
}

const fontLinks: LinkDescriptor[] = [
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
    },
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css'
    }
]

export const links: LinksFunction = () => [{rel: "stylesheet", href: stylesheet}, ...fontLinks];

export default function App() {
    const {pathname} = useLocation();
    const {address} = useLoaderData<typeof loader>();
    return (
        <html lang="en">
        <head>
            <Links/>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link rel="icon" href="/_static/favicon.ico"/>
            <Meta/>
        </head>
        <body
            className={`bg-custom bg-no-repeat bg-cover bg-center w-screen h-screen relative ${pathname !== "/" ? 'dark-bg' : ''}`}>
        <Navbar address={address} isAuthenticated={!!address}/>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
