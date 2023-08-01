import { proxy } from 'valtio'
import {add} from "mnemonist/set";

interface IAccount {
    address: string;
    secret: string;
}

export const store = proxy<{ account: IAccount; isAuthenticated: boolean }>({
    account: {
        address: '',
        secret: '',
    },
    isAuthenticated: false
})

export const login = (address: string, secret: string) => {
    store.account.address = address;
    store.account.secret = secret;
    store.isAuthenticated = true;
}