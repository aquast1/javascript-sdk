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
const util_1 = require("./util");
const InvoiceLine_1 = require("./InvoiceLine");
const Invoice_1 = require("./Invoice");
class InvoiceLineGateway {
    constructor(gateway) {
        this.gateway = gateway;
        this.config = gateway.config;
    }
    create(invoiceId, invoiceLines) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/create-lines');
            const result = yield this.gateway.client.post(endPoint, Object.assign({ invoiceId: invoiceId }, { lines: invoiceLines }));
            return result.invoice.lines.map((line) => Object.assign(new InvoiceLine_1.InvoiceLine(), line));
        });
    }
    update(invoiceId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/update-lines');
            const result = yield this.gateway.client.post(endPoint, Object.assign({ invoiceId: invoiceId }, body));
            return Object.assign(new Invoice_1.Invoice(), result.invoice);
        });
    }
    delete(invoiceId, lineIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('invoices/delete-lines');
            const result = yield this.gateway.client.post(endPoint, {
                invoiceId: invoiceId,
                invoiceLineIds: lineIds,
            });
            return true;
        });
    }
}
exports.InvoiceLineGateway = InvoiceLineGateway;
