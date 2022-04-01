import { Recipient } from './Recipient';
import { Gateway } from "./Gateway";
export interface RecipientInput {
    referenceId?: string;
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    type?: "individual" | "business";
    dob?: string;
    ssn?: string;
    governmentId?: string;
    passport?: string;
    language?: string;
    address?: {
        phone?: string;
        street1?: string;
        street2?: string;
        city?: string;
        postalCode?: string;
        region?: string;
        country?: string;
    };
    account?: any;
}
export declare class RecipientGateway {
    /**
     * @hidden
     */
    private gateway;
    /**
     * @hidden
     */
    private config;
    /**
     * @param gateway gateway object
     * @private
     */
    constructor(gateway: Gateway);
    /**
     * Find a specific recipient by their Payment Rails recipient ID
     * ```
     * const recipient = await client.recipient.find('R-1234');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     */
    find(recipientId: string): Promise<Recipient>;
    /**
     * Create a given recipient
     * ```
     * const recipient = await client.recipient.create({
     *   type: "individual",
     *   firstName: "Tom",
     *   lastName: "Jones",
     *   email: "tom.jones@example.com",
     *   address: {
     *      street1: "123 Main St",
     *      country: "US",
     *   }
     * });
     * ```
     * @param body The recipient information to create
     */
    create(body: RecipientInput): Promise<Recipient>;
    /**
     * Update the given recipient
     * ```
     * const recipient = await client.recipient.update('R-1234', {
     *   firstName: "Carl",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param body the changes to make to the recipient
     */
    update(recipientId: string, body: RecipientInput): Promise<boolean>;
    /**
     * Delete the given recipient.
     * ```
     * const status = await client.recipient.remove('R-123');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     */
    remove(recipientId: string): Promise<boolean>;
    search(page: number, pageSize: number, term: string, referenceId: string): Promise<Recipient[]>;
}
