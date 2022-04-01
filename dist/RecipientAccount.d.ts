import * as types from "./types";
/**
 * @name RecipientAccount
 */
export declare class RecipientAccount {
    id: string;
    primary: boolean;
    currency: string;
    routeType?: string;
    recipientFees?: string;
    emailAddress?: string;
    country?: string;
    type?: string;
    iban?: string;
    accountNum?: string;
    accountHolderName?: string;
    swiftBic?: string | null;
    branchId?: string;
    bankId?: string;
    bankName?: string;
    bankAddress?: string;
    bankCity?: string;
    bankRegionCode?: string;
    bankPostalCode?: string;
    /**
     * Retrieves the payout method based on the recipient id
     * @param {string} recipientId
     * @param {string} recipientAccountId
     * @hidden
     */
    static all(recipientId: string): Promise<RecipientAccount[]>;
    /**
     * Retrieves the payout method based on the recipient id
     * @param {string} recipientId
     * @param {string} recipientAccountId
     * @hidden
     */
    static find(recipientId: string, recipientAccountId: string): Promise<RecipientAccount>;
    /**
     * Creates a payout method based on the body and recipient id
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static create(recipientId: string, body: any): Promise<RecipientAccount>;
    /**
     * Updates a payout method based on the body and the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     * @hidden
     */
    static update(recipientId: string, recipientAccountId: string, body: any): Promise<RecipientAccount>;
    /**
     * Delete a payout method based on the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     * @hidden
     */
    static remove(recipientId: string, recipientAccountId: string): Promise<boolean>;
    /**
     * @param account
     * @param account
     * @hidden
     */
    static factory(account: types.Recipient.Account): RecipientAccount;
    /**
     * @param account
     * @hidden
     */
    private _initialize;
}
