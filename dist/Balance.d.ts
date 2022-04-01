import * as types from "./types";
/**
 * Balance information for a given account type and/or currency
 * @name Balance
 */
export declare class Balance {
    primary: boolean;
    amount: string;
    currency: string;
    type: string;
    accountNumber: string;
    /**
     * Retrieves the balance based on the api key
     * @param {string} term
     * @hidden
     */
    static all(): Promise<Balance[]>;
    /**
     * Retrieves the balance based on the api key
     * @param {string} term
     * @hidden
     */
    static find(term: "paypal" | "paymentrails"): Promise<Balance[]>;
    /**
     * Construct a balance object from a response
     * @param balance
     * @hidden
     */
    static factory(balance: types.Balance.Balance): Balance;
    /**
     * Construct a balance object from a response, implementation
     * @hidden
     */
    private _initialize;
}
