import { Gateway } from "./Gateway";
import { Batch } from './Batch';
import { Payment } from './Payment';
import * as types from "./types";
export interface BatchInput {
    sourceCurrency?: string;
    description?: string;
}
/**
 * @type PaymentInput
 */
export interface PaymentInput {
    sourceAmount?: string;
    targetAmount?: string;
    targetCurrency?: string;
    memo?: string;
    recipient: {
        id?: string;
        referenceId?: string;
        email?: string;
    };
}
/**
 * Gateway class for batcheso
 * @class BatchGateway
 */
export declare class BatchGateway {
    /**
     * @hidden
     */
    gateway: Gateway;
    /**
     * Internal constructor to build the gateway interface
     * @param {Gateway} gateway gateway configuration
     * @hidden
     */
    constructor(gateway: Gateway);
    /**
     * Fetch batch all batches with an Iterator
     * ```
     * ```
     */
    all(): Promise<Batch[]>;
    /**
     * Retrieves a batch based on the batch id
     * ```
     * const batch = await client.batch.find('B-xx999bb');
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    find(batchId: string): Promise<Batch>;
    /**
     * Creates a batch with optional payments. This is the interface that is
     * provide by the {@link http://docs.paymentrails.com/api/#create-a-batch Create Batch} API
     *
     * ```js
     * const batch = await client.batch.create({
     *     description: "My Batch",
     *     sourceCurrency: "USD",
     *   }, [
     *     {
     *       recipient: {
     *         email: "john@example.com",
     *       },
     *       sourceAmount: "10.20",
     *     },
     *   ]);
     * ```
     * @param {BatchInput} batch
     * @param {PaymentInput} payments (optional)
     */
    create(batch: BatchInput, payments?: PaymentInput[]): Promise<Batch>;
    /**
     * Update the batch data, note you can only update the information of a batch
     *  not the payments via this API
     * ```
     * const batch = await client.batch.create({
     *     description: "My Batch for Wednesday",
     * });
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     * @param {BatchInput} parameters
     */
    update(batchId: string, body: BatchInput): Promise<boolean>;
    /**
     * Delete the given batch
     * ```
     * const success = client.batch.remove('B-xx999bb');
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    remove(batchId: string): Promise<boolean>;
    /**
     * Search for a batch matching the given term
     * @param page
     * @param pageSize
     * @param term string search term
     */
    search(page?: number, pageSize?: number, term?: string): Promise<Batch[]>;
    /**
     * Return a paginated list of payments for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     * @param page starting a 1
     * @param pageSize in the range 0...1000
     */
    paymentList(batchId: string, page?: number, pageSize?: number): Promise<Payment[]>;
    /**
     * Generate a FX quote for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    generateQuote(batchId: string): Promise<Batch>;
    /**
     * Start processing this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    startProcessing(batchId: string): Promise<Batch>;
    /**
     * Get a transaction totaled summary for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    summary(batchId: string): Promise<types.BatchSummary.BatchSummary>;
}
