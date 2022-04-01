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
const Recipient_1 = require("./Recipient");
// tslint:disable:function-name
/**
 * @name Payment
 */
class Payment {
    constructor() {
        this.id = "";
        this.recipient = {};
        this.status = "";
        this.sourceAmount = "";
        this.exchangeRate = "";
        this.fees = "";
        this.recipientFees = "";
        this.returnedAmount = "";
        this.targetAmount = "";
        this.fxRate = "";
        this.memo = "";
        this.processedAt = "";
        this.createdAt = "";
        this.updatedAt = "";
        this.merchantFees = "";
        this.compliance = { status: "", checkedAt: "" };
        this.coverFees = false;
        this.sourceCurrency = null;
        this.targetCurrency = null;
        this.isSupplyPayment = false;
        this.payoutMethod = "";
    }
    /**
     * Retrieves a payment based on the payment id and or
     * the batch id
     * @param {string} paymentId
     * @hidden
     */
    static find(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Configuration_1.Configuration.gateway().payment.find(paymentId);
            const jsonObj = JSON.parse(data.toString());
            return jsonObj;
        });
    }
    /**
     * Creates a payment based on the batch id
     * @param {string} batchId
     * @param {array} body
     * @hidden
     */
    static create(batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().payment.create(batchId, body);
        });
    }
    /**
     * Updates a payment based on the payment id
     * @param {string} paymentId
     * @param {string} batchId
     * @param {array} body
     * @hidden
     */
    static update(paymentId, batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().payment.update(paymentId, batchId, body);
        });
    }
    /**
     * Delete a payment based on the paymentId id
     * @param {string} paymentId
     * @param {string} batchId
     * @hidden
     */
    static remove(paymentId, batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().payment.remove(paymentId, batchId);
        });
    }
    /**
     * List all payments based on the batch id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     * @hidden
     */
    static search(query, page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Configuration_1.Configuration.gateway().payment.search(query, page, pageSize, term);
            const jsonObj = JSON.parse(data.toString());
            return jsonObj;
        });
    }
    /**
     * Should only be called by the Gateway
     * @hidden
     */
    static factory(payment) {
        const instance = new Payment();
        instance._initialize(payment);
        return instance;
    }
    /**
     * @hidden
     */
    _initialize(payment) {
        Object.keys(payment).forEach((k) => {
            if (k === "recipient") {
                this.recipient = Recipient_1.Recipient.factory(payment.recipient);
            }
            else {
                this[k] = payment[k];
            }
        });
    }
}
exports.Payment = Payment;
