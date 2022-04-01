import { Payment } from "./Payment";
import * as types from "./types";
export interface BatchInput {
    sourceCurrency: string;
    description: string;
}
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
 *
 */
export declare class Batch {
    id: string;
    status: string;
    amount: string;
    totalPayments: number;
    currency: string;
    description: string;
    sentAt: string;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
    payments: {
        payments: Payment[];
    } & types.Serializer.WithMeta;
    quoteExpiredAt?: string;
    /**
     * Retrieves a batch based on the batch id
     * @param {string} batchId
     */
    static all(): Promise<Batch[]>;
    /**
     * Retrieves a batch based on the batch id
     * @param {string} batchId
     */
    static find(batchId: string): Promise<Batch>;
    /**
     * Creates a batch or
     * generates quote based on batch id or
     * process batch based on batch id
     * @param {string} batchId
     * @param {array} body
     */
    static create(batch: BatchInput, payments?: PaymentInput[]): Promise<Batch>;
    /**
     * Updates a batch based on the batch id
     * @param {string} batchId
     * @param {array} body
     */
    static update(batchId: string, body: any): Promise<boolean>;
    /**
     * Delete a batch based on the batch id
     * @param {string} batchId
     */
    static remove(batchId: string): Promise<boolean>;
    /**
     * List all batches based on the batch id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static search(page?: number, pageSize?: number, term?: string): Promise<Batch[]>;
    /**
     * Generate quote for a batch based on the batch id
     * @param batchId
     */
    static generateQuote(batchId: string): Promise<Batch>;
    /**
     * Process a batch based on batch id
     * @param batchId
     */
    static startProcessing(batchId: string): Promise<Batch>;
    /**
     * Retrieve a summary of a batch based on the batch id
     * @param {string} batchId
     */
    static summary(batchId: string): Promise<types.BatchSummary.BatchSummary>;
    /**
     * Retrieve a summary of a batch based on the batch id
     * @param {string} batchId
     *
     *  static async function* payments(batchId: string) {
     *    const result = await Configuration.gateway().batch.payments(batchId);
     *
     *    if (result.ok) {
     *      yield* result.payments;
     *    } else {
     *      throw new DownForMaintenance();
     *    }
     *  }
     */
    /**
     * Retrieve a summary of a batch based on the batch id
     * @param {string} batchId
     */
    static paymentList(batchId: string, page?: number, pageSize?: number): Promise<Payment[]>;
    static factory(batch: types.Batch.Batch): Batch;
    private _initialize;
}
