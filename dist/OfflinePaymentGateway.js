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
const OfflinePayment_1 = require("./OfflinePayment");
const util_1 = require("./util");
const querystring = require("querystring");
class OfflinePaymentGateway {
    /**
     * @param gateway
     * @hidden
     */
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
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
    create(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("recipients", recipientId, "offlinePayments");
            const result = yield this.gateway.client.post(endPoint, body);
            return OfflinePayment_1.OfflinePayment.factory(result.offlinePayment);
        });
    }
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
    update(recipientId, offlinePaymentId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("recipients", recipientId, "offlinePayments", offlinePaymentId);
            const result = yield this.gateway.client.patch(endPoint, body);
            return true;
        });
    }
    /**
     * Delete a given offline payment
     * ```
     * const success = await client.offlinePayment.remove('R-aabbccc', 'OP-xx99bb');
     * ```
     * @param recipientId Payment Rails recipient id (e.g. "R-aabccc")
     * @param offlinePaymentId Payment Rails offline payment id (e.g. "OP-xx999bb")
     */
    remove(recipientId, offlinePaymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL("recipients", recipientId, "offlinePayments", offlinePaymentId);
            const result = yield this.gateway.client.remove(endPoint);
            return true;
        });
    }
    /**
     * Search for offline payments
     * @param query Object containing either search key, usually either "recipientId"
     * @param page Page number (1 based)
     * @param pageSize Page size (0...1000)
     * @param term Any search terms to look for
     */
    search(query, page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            const endPoint = !!(query && query.recipientId)
                ? util_1.buildURL("recipients", query.recipientId, "offline-payments")
                : util_1.buildURL("offline-payments");
            const urlQuery = querystring.stringify(Object.assign({}, query, { page,
                pageSize, search: term }));
            const result = yield this.gateway.client.get(`${endPoint}?${urlQuery}`);
            return result.offlinePayments.map(p => OfflinePayment_1.OfflinePayment.factory(p));
        });
    }
}
exports.OfflinePaymentGateway = OfflinePaymentGateway;
