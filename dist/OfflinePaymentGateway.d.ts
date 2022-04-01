import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import { OfflinePayment } from "./OfflinePayment";
export declare class OfflinePaymentGateway {
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
     * Create a new offline payment
     * ```
     * const payment = await client.offlinePayment.create('OP-xx99bb', {
     *   taxReportable: true,
     *   amount: "10.00",
     *   currency: "USD",
     *   withholdingAmount: "2.40",
     *   withholdingCurrency: "USD",
     * });
     * ```
     * @param recipientId Payment Rails recipient id (e.g. "R-xx999bb")
     * @param body Offline Payment information
     */
    create(recipientId: string, body: any): Promise<OfflinePayment>;
    /**
     * Update a given offline payment
     * ```
     * const success = await client.offlinePayment.update('R-aabbccc', 'OP-xx99bb', {
     *   taxReportable: true,
     *   amount: "10.00",
     *   currency: "USD",
     *   withholdingAmount: "2.40",
     *   withholdingCurrency: "USD",
     * });
     * ```
     * @param recipientId Payment Rails recipient id (e.g. "R-aabccc")
     * @param offlinePaymentId Payment Rails offline payment id (e.g. "OP-xx999bb")
     * @param body Payment update information
     */
    update(recipientId: string, offlinePaymentId: string, body: any): Promise<boolean>;
    /**
     * Delete a given offline payment
     * ```
     * const success = await client.offlinePayment.remove('R-aabbccc', 'OP-xx99bb');
     * ```
     * @param recipientId Payment Rails recipient id (e.g. "R-aabccc")
     * @param offlinePaymentId Payment Rails offline payment id (e.g. "OP-xx999bb")
     */
    remove(recipientId: string, offlinePaymentId: string): Promise<boolean>;
    /**
     * Search for offline payments
     * @param query Object containing either search key, usually either "recipientId"
     * @param page Page number (1 based)
     * @param pageSize Page size (0...1000)
     * @param term Any search terms to look for
     */
    search(query: {
        [key: string]: string;
    }, page?: number, pageSize?: number, term?: string): Promise<OfflinePayment[]>;
}
