import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { RecipientAccount } from "./RecipientAccount";
export declare class RecipientAccountGateway {
    /**
     * @private
     */
    gateway: Gateway;
    /**
     * @private
     */
    config: Configuration;
    /**
     * @private
     */
    constructor(gateway: Gateway);
    /**
     * Fetch all of the accounts for a given Payment Rails recipient
     * ```
     * const accounts = await client.recipientAccount.all('R-1234');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @throws {NotFound} if recipient doesn't exist
     */
    all(recipientId: string): Promise<RecipientAccount[]>;
    /**
     * Fetch a specific account for a given Payment Rails recipient
     * ```
     * const account = await client.recipientAccount.find('R-1234', 'A-789');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     * @throws {NotFound} if account or recipient don't exist
     */
    find(recipientId: string, accountId: string): Promise<RecipientAccount>;
    /**
     * Create a new recipient account
     * ```
     * const account = await client.recipientAccount.create('R-1234', {
     *   type: "bank-transfer",
     *   primary: true,
     *   country: "CA",
     *   currency: "CAD",
     *   accountNum: "012345678",
     *   bankId: "004",
     *   branchId: "47261",
     *   accountHolderName: "John Smith",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param body Account information
     */
    create(recipientId: string, body: any): Promise<RecipientAccount>;
    /**
     * Update a recipient account.
     *   Note: Updating an account will create a new account ID if it contains any property that
     *         isn't just "primary"
     * ```
     * const account = await client.recipientAccount.update('R-1234', 'A-789', {
     *   accountHolderName: "Tom Jones",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     * @param body Account information
     */
    update(recipientId: string, accountId: string, body: any): Promise<RecipientAccount>;
    /**
     * Delete the given recipient account. This will only return success, otherwise it will
     * throw an exception (e.g. NotFound)
     * ```
     * const success = await client.recipientAccount.remove('R-1234', 'A-789');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     */
    remove(recipientId: string, accountId: string): Promise<boolean>;
}
