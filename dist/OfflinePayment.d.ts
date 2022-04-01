import { Recipient } from "./Recipient";
import * as types from "./types";
/**
 * @name OfflinePayment
 */
export declare class OfflinePayment {
    id: string;
    recipientId: Recipient["id"];
    externalId: string | null;
    memo: string;
    tags: string[];
    taxReportable: boolean;
    category: string;
    amount: string;
    currency: string;
    withholdingAmount: string;
    withholdingCurrency: string;
    processedAt: string;
    /**
     * Creates an offline payment
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static create(recipientId: string, body: any): Promise<OfflinePayment>;
    /**
     * Updates an offline payment based on the offline payment id
     * @param {string} offlinePaymentId
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static update(offlinePaymentId: string, recipientId: string, body: any): Promise<boolean>;
    /**
     * Delete an offline payment based on the offline payment id and the recipient's ID that it's associated with
     * @param {string} offlinePaymentId
     * @param {string} recipientId
     * @hidden
     */
    static remove(offlinePaymentId: string, recipientId: string): Promise<boolean>;
    /**
     * List all offline payments
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     * @hidden
     */
    static search(query: {
        [key: string]: string;
    }, page?: number, pageSize?: number, term?: string): Promise<types.Payment.ListResult>;
    /**
     * Should only be called by the Gateway
     * @hidden
     */
    static factory(offlinePayment: types.OfflinePayment.OfflinePayment): OfflinePayment;
    /**
     * @hidden
     */
    private _initialize;
}
