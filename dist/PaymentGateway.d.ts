import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { Payment } from "./Payment";
export declare class PaymentGateway {
    /**
     * @hidden
     */
    gateway: Gateway;
    /**
     * @hidden
     */
    config: Configuration;
    /**
     * @param gateway
     * @hidden
     */
    constructor(gateway: Gateway);
    /**
     * Find a specific payment
     * ```
     * const payment = await client.payment.find('P-aabbccc');
     * ```
     * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
     */
    find(paymentId: string): Promise<Payment>;
    /**
     * Create a new payment in a batch
     * ```
     * const payment = await client.payment.create('B-xx99bb', {
     *   recipient: {
     *     email: 'tom.jones@example.com',
     *   },
     *   sourceAmount: '10.99',
     * });
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     * @param body Payment information
     */
    create(batchId: string, body: any): Promise<Payment>;
    /**
     * Update a given payment
     * ```
     * const success = await client.payment.update('P-aabbccc', 'B-xx99bb', {
     *   sourceAmount: '99.99',
     * });
     * ```
     * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     * @param body Payment update information
     */
    update(paymentId: string, batchId: string, body: any): Promise<boolean>;
    /**
     * Delete a given payment -- Note you can only delete non processed payments
     * ```
     * const success = await client.payment.remove('P-aabbccc', 'B-xx99bb');
     * ```
     * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    remove(paymentId: string, batchId: string): Promise<boolean>;
    /**
     * Search for payments in a given batch
     * @param query Object containing either search key, usually either "recipientId" or "batchId"
     * @param page Page number (1 based)
     * @param pageSize Page size (0...1000)
     * @param term Any search terms to look for
     */
    search(query: {
        [key: string]: string;
    }, page?: number, pageSize?: number, term?: string): Promise<Payment[]>;
}
