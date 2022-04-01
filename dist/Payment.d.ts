import { Recipient } from "./Recipient";
import * as types from "./types";
/**
 * @name Payment
 */
export declare class Payment {
    id: string;
    recipient: Recipient;
    status: string;
    sourceAmount: string;
    exchangeRate: string;
    fees: string;
    recipientFees: string;
    returnedAmount: string;
    targetAmount: string;
    fxRate: string;
    memo: string;
    processedAt: string;
    createdAt: string;
    updatedAt: string;
    merchantFees: string;
    compliance: {
        status: string;
        checkedAt: string;
    };
    coverFees: boolean;
    sourceCurrency: string | null;
    targetCurrency: string | null;
    isSupplyPayment: boolean;
    payoutMethod: string;
    /**
     * Retrieves a payment based on the payment id and or
     * the batch id
     * @param {string} paymentId
     * @hidden
     */
    static find(paymentId: string): Promise<types.Payment.Result>;
    /**
     * Creates a payment based on the batch id
     * @param {string} batchId
     * @param {array} body
     * @hidden
     */
    static create(batchId: string, body: any): Promise<Payment>;
    /**
     * Updates a payment based on the payment id
     * @param {string} paymentId
     * @param {string} batchId
     * @param {array} body
     * @hidden
     */
    static update(paymentId: string, batchId: string, body: any): Promise<boolean>;
    /**
     * Delete a payment based on the paymentId id
     * @param {string} paymentId
     * @param {string} batchId
     * @hidden
     */
    static remove(paymentId: string, batchId: string): Promise<boolean>;
    /**
     * List all payments based on the batch id and
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
    static factory(payment: types.Payment.Payment): Payment;
    /**
     * @hidden
     */
    private _initialize;
}
