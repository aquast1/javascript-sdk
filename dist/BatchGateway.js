"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Batch_1 = require("./Batch");
const Payment_1 = require("./Payment");
const querystring = require("querystring");
const util_1 = require("./util");
/**
 * Gateway class for batcheso
 * @class BatchGateway
 */
class BatchGateway {
    /**
     * Internal constructor to build the gateway interface
     * @param {Gateway} gateway gateway configuration
     * @hidden
     */
    constructor(gateway) {
        this.gateway = gateway;
    }
    /**
     * Fetch batch all batches with an Iterator
     * ```
     * ```
     */
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches');
            const result = yield this.gateway.client.get(endPoint);
            return result.batches.map(b => Batch_1.Batch.factory(b));
        });
    }
    /**
     * Retrieves a batch based on the batch id
     * ```
     * const batch = await client.batch.find('B-xx999bb');
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    find(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId);
            const result = yield this.gateway.client.get(endPoint);
            return Batch_1.Batch.factory(result.batch);
        });
    }
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
    create(batch, payments) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches');
            const result = yield this.gateway.client.post(endPoint, Object.assign({}, batch, (payments ? { payments } : {})));
            return Batch_1.Batch.factory(result.batch);
        });
    }
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
    update(batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId);
            const result = yield this.gateway.client.patch(endPoint, body);
            return true;
        });
    }
    /**
     * Delete the given batch
     * ```
     * const success = client.batch.remove('B-xx999bb');
     * ```
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    remove(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId);
            const result = yield this.gateway.client.remove(endPoint);
            return true;
        });
    }
    /**
     * Search for a batch matching the given term
     * @param page
     * @param pageSize
     * @param term string search term
     */
    search(page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            const endPoint = util_1.buildURL('batches');
            const query = querystring.stringify({
                page,
                pageSize,
                search: term,
            });
            const result = yield this.gateway.client.get(`${endPoint}?${query}`);
            return result.batches.map(b => Batch_1.Batch.factory(b));
        });
    }
    /**
     * Return a paginated list of payments for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     * @param page starting a 1
     * @param pageSize in the range 0...1000
     */
    paymentList(batchId, page = 1, pageSize = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId, 'payments');
            const query = querystring.stringify({
                page,
                pageSize,
            });
            const result = yield this.gateway.client.get(`${endPoint}?${query}`);
            return result.payments.map(b => Payment_1.Payment.factory(b));
        });
    }
    /**
     * Generate a FX quote for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    generateQuote(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId, 'generate-quote');
            const result = yield this.gateway.client.post(endPoint);
            return Batch_1.Batch.factory(result.batch);
        });
    }
    /**
     * Start processing this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    startProcessing(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId, 'start-processing');
            const result = yield this.gateway.client.post(endPoint);
            return Batch_1.Batch.factory(result.batch);
        });
    }
    /**
     * Get a transaction totaled summary for this batch
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    summary(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('batches', batchId, 'summary');
            const result = yield this.gateway.client.get(endPoint);
            return result.batchSummary;
        });
    }
}
exports.BatchGateway = BatchGateway;
