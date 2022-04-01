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
const Configuration_1 = require("./Configuration");
// tslint:disable:function-name
/**
 * @name OfflinePayment
 */
class OfflinePayment {
    constructor() {
        this.id = "";
        this.recipientId = "";
        this.externalId = "";
        this.memo = "";
        this.tags = [];
        this.taxReportable = true;
        this.category = "";
        this.amount = "";
        this.currency = "";
        this.withholdingAmount = "";
        this.withholdingCurrency = "";
        this.processedAt = "";
    }
    /**
     * Creates an offline payment
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static create(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().offlinePayment.create(recipientId, body);
        });
    }
    /**
     * Updates an offline payment based on the offline payment id
     * @param {string} offlinePaymentId
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static update(offlinePaymentId, recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().offlinePayment.update(recipientId, offlinePaymentId, body);
        });
    }
    /**
     * Delete an offline payment based on the offline payment id and the recipient's ID that it's associated with
     * @param {string} offlinePaymentId
     * @param {string} recipientId
     * @hidden
     */
    static remove(offlinePaymentId, recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().offlinePayment.remove(offlinePaymentId, recipientId);
        });
    }
    /**
     * List all offline payments
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     * @hidden
     */
    static search(query, page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Configuration_1.Configuration.gateway().offlinePayment.search(query, page, pageSize, term);
            const jsonObj = JSON.parse(data.toString());
            return jsonObj;
        });
    }
    /**
     * Should only be called by the Gateway
     * @hidden
     */
    static factory(offlinePayment) {
        const instance = new OfflinePayment();
        instance._initialize(offlinePayment);
        return instance;
    }
    /**
     * @hidden
     */
    _initialize(offlinePayment) {
        Object.keys(offlinePayment).forEach(k => {
            this[k] = offlinePayment[k];
        });
    }
}
exports.OfflinePayment = OfflinePayment;
