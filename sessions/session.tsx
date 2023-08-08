import { createCookieSessionStorage } from "@remix-run/node";


type SessionData = {
    accountAddress: string;
    secret: string;
    hasRentalHook: boolean;
}

type SessionFlashData = {
    error: string;
};

const EXPIRATION_DURATION_IN_SECONDS = 60000;
const expires = new Date();
expires.setSeconds(expires.getSeconds() + EXPIRATION_DURATION_IN_SECONDS);

export const { getSession, commitSession, destroySession } =
    createCookieSessionStorage<SessionData, SessionFlashData>({
        cookie: {
            name: "__session",
            httpOnly: true,
        },
    });
