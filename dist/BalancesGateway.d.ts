import { Gateway } from "./Gateway";
import { Balance } from "./Balance";
export declare class BalancesGateway {
    /**
     * @private
     */
    private gateway;
    /**
     * @private
     */
    private config;
    /**
     * @private
     * @param gateway gateway object
     */
    constructor(gateway: Gateway);
    /**
     * Fetch the account balance for all enabled bank accounts
     * ```
     * const balances = await client.balances.all();
     * ```
     */
    all(): Promise<Balance[]>;
    /**
     * Fetch the account balance for the given account type
     * ```
     * const balances = await client.balances.find("paymentrails");
     * ```
     * @param kind The account type to get the balances for
     */
    find(kind: "paypal" | "paymentrails"): Promise<Balance[]>;
}
