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
const Invoice_1 = require("./Invoice");
const util_1 = require("./util");
class InvoiceGateway {
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
    find(invoiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/get');
            const result = yield this.gateway.client.post(endPoint, {
                invoiceId: invoiceId,
            });
            return Object.assign(new Invoice_1.Invoice(), result.invoice);
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/create');
            const result = yield this.gateway.client.post(endPoint, body);
            return Object.assign(new Invoice_1.Invoice(), result.invoice);
        });
    }
    update(invoiceId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/update');
            const result = yield this.gateway.client.post(endPoint, Object.assign({ invoiceId: invoiceId }, body));
            return Object.assign(new Invoice_1.Invoice(), result.invoice);
        });
    }
    remove(invoiceIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/delete');
            const result = yield this.gateway.client.post(endPoint, {
                invoiceIds: invoiceIds,
            });
            return true;
        });
    }
    search(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/search');
            const result = yield this.gateway.client.post(endPoint, body);
            return result.invoices.map((line) => Object.assign(new Invoice_1.Invoice(), line));
        });
    }
}
exports.InvoiceGateway = InvoiceGateway;
