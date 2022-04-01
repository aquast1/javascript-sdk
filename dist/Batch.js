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
/**
 *
 */
class Batch {
    constructor() {
        this.id = "";
        this.status = "";
        this.amount = "0.00";
        this.totalPayments = 0;
        this.currency = "";
        this.description = "";
        this.sentAt = "";
        this.completedAt = "";
        this.createdAt = "";
        this.updatedAt = "";
        this.payments = {
            payments: [],
            meta: {
                records: 0,
                page: 0,
                pages: 0,
            },
        };
    }
    /**
     * Retrieves a batch based on the batch id
     * @param {string} batchId
     */
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.all();
        });
    }
    /**
     * Retrieves a batch based on the batch id
     * @param {string} batchId
     */
    static find(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.find(batchId);
        });
    }
    /**
     * Creates a batch or
     * generates quote based on batch id or
     * process batch based on batch id
     * @param {string} batchId
     * @param {array} body
     */
    static create(batch, payments) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.create(batch, payments);
        });
    }
    /**
     * Updates a batch based on the batch id
     * @param {string} batchId
     * @param {array} body
     */
    static update(batchId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.update(batchId, body);
        });
    }
    /**
     * Delete a batch based on the batch id
     * @param {string} batchId
     */
    static remove(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.remove(batchId);
        });
    }
    /**
     * List all batches based on the batch id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static search(page = 1, pageSize = 10, term = "") {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.search(page, pageSize, term);
        });
    }
    /**
     * Generate quote for a batch based on the batch id
     * @param batchId
     */
    static generateQuote(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.generateQuote(batchId);
        });
    }
    /**
     * Process a batch based on batch id
     * @param batchId
     */
    static startProcessing(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.startProcessing(batchId);
        });
    }
    /**
     * Retrieve a summary of a batch based on the batch id
     * @param {string} batchId
     */
    static summary(batchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.summary(batchId);
        });
    }
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
    static paymentList(batchId, page = 1, pageSize = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().batch.paymentList(batchId, page, pageSize);
        });
    }
    static factory(batch) {
        const instance = new Batch();
        instance._initialize(batch);
        return instance;
    }
    _initialize(account) {
        Object.keys(account).forEach((k) => {
            this[k] = account[k];
        });
    }
}
exports.Batch = Batch;
