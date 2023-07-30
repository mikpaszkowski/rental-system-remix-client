import type { LinksFunction } from "@remix-run/node";
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation, useNavigate, } from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css"
import type { LinkDescriptor } from "@remix-run/server-runtime/dist/links";
import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";

const fontLinks: LinkDescriptor[] = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap'
    },
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css'
    }
]

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }, ...fontLinks];

export default function App() {
    const {pathname} = useLocation();
    return (
        <html lang="en">
            <head>
                <Links />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/_static/favicon.ico" />
                <Meta />
            </head>
            <body className={`bg-custom bg-no-repeat bg-cover bg-center w-screen h-screen ${pathname !== "/" ? 'dark-bg' : ''}`}>
            <Navbar />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
