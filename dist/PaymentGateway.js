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
const Payment_1 = require("./Payment");
const util_1 = require("./util");
const querystring = require("querystring");
class PaymentGateway {
    /**
     * @param gateway
     * @hidden
     */
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
    /**
     * Find a specific payment
     * ```
     * const payment = await client.payment.find('P-aabbccc');
     * ```
     * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
     */
    find(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("payments", paymentId);
            const result = yield this.gateway.client.get(endPoint);
            return Payment_1.Payment.factory(result.payment);
        });
    }
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
    create(batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("batches", batchId, "payments");
            const result = yield this.gateway.client.post(endPoint, body);
            return Payment_1.Payment.factory(result.payment);
        });
    }
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
    update(paymentId, batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("batches", batchId, "payments", paymentId);
            const result = yield this.gateway.client.patch(endPoint, body);
            return true;
        });
    }
    /**
     * Delete a given payment -- Note you can only delete non processed payments
     * ```
     * const success = await client.payment.remove('P-aabbccc', 'B-xx99bb');
     * ```
     * @param paymentId Payment Rails payment id (e.g. "P-aabccc")
     * @param batchId Payment Rails payment id (e.g. "B-xx999bb")
     */
    remove(paymentId, batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("batches", batchId, "payments", paymentId);
            const result = yield this.gateway.client.remove(endPoint);
            return true;
        });
    }
    /**
     * Search for payments in a given batch
     * @param query Object containing either search key, usually either "recipientId" or "batchId"
     * @param page Page number (1 based)
     * @param pageSize Page size (0...1000)
     * @param term Any search terms to look for
     */
    search(query, page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            const endPoint = util_1.buildURL("payments");
            const urlQuery = querystring.stringify(Object.assign({}, query, { page,
                pageSize, search: term }));
            const result = yield this.gateway.client.get(`${endPoint}?${urlQuery}`);
            return result.payments.map(p => Payment_1.Payment.factory(p));
        });
    }
}
exports.PaymentGateway = PaymentGateway;
