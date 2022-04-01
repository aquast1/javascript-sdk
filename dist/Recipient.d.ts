import { RecipientAccount } from "./RecipientAccount";
import * as types from "./types";
/**
 * @name Recipient
 */
export declare class Recipient {
    id: string;
    referenceId: string;
    email: string;
    name: string;
    lastName: string;
    firstName: string;
    type: string;
    taxType: null | string;
    status: string;
    language: string;
    complianceStatus: string;
    dob: null | string;
    passport: string;
    updatedAt: string;
    createdAt: string;
    address: {
        street1: string;
        street2: string;
        city: string;
        postalCode: string;
        country: string;
        region: string;
        phone: string;
        phoneValidated: boolean;
    };
    compliance: {
        status: string;
        checkedAt: string;
    };
    gravatarUrl: string;
    governmentId: null | string;
    ssn: null | string;
    accounts: RecipientAccount[];
    primaryCurrency: null | string;
    routeType: string | null;
    estimatedFees: string | null;
    static all(): Promise<boolean>;
    /**
     * Retrieves a recipient based on the recipient id given or
     * retrieves a list of payments or logs depending on the term
     * @param {string} recipientId
     * @param {string} term
     */
    static find(recipientId: string): Promise<Recipient>;
    /**
     * Creates a recipient based on the body given to the client
     * @param {array} body
     */
    static create(body: any): Promise<Recipient>;
    /**
     * Updates a recipient based on the body given to the client
     * and the recipient id
     * @param {string} recipientId
     * @param {array} body
     */
    static update(recipientId: string, body: any): Promise<boolean>;
    /**
     * Delete a recipient based on the recipient id
     * @param {string} recipientId
     */
    static remove(recipientId: string): Promise<boolean>;
    /**
     * List all recipients based on the recipient id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static search(page?: number, pageSize?: number, term?: string, referenceId?: string): Promise<Recipient[]>;
    /**
     * Should only be called by the Gateway
     */
    static factory(recipient: types.Recipient.Recipient): Recipient;
    private _initialize;
}
