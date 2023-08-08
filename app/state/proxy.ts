import {proxy} from 'valtio'
import {AccountInfoDto} from "~/routes/auth";

interface IAccount {
    address: string;
    secret: string;
    balance: number;
    numOfOffers: number;
    numOfRentals: number;
    hasRentalHookInstalled: boolean;
}

export const store = proxy<{ account: IAccount; isAuthenticated: boolean }>({
    account: {
        address: '',
        secret: '',
        balance: 0,
        numOfOffers: 0,
        numOfRentals: 0,
        hasRentalHookInstalled: false,
    },
    isAuthenticated: false
})

export const login = (input: AccountInfoDto, secret: string) => {
    store.account.address = input.address;
    store.account.secret = secret;
    store.account.balance = input.balance;
    store.account.numOfOffers = input.numOfOffers;
    store.account.numOfRentals = input.numOfRentals;
    store.account.hasRentalHookInstalled = input.hasRentalHookInstalled;
    store.isAuthenticated = true;
}