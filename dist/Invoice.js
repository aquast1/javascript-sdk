"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor() {
        this.id = "";
        this.recipientId = "";
        this.description = "";
        this.externalId = "";
        this.invoiceDate = "";
        this.invoiceNumber = 0;
        this.dueDate = "";
        this.status = "";
        this.releaseAfter = "";
        this.createdAt = "";
        this.updatedAt = "";
        this.lines = [];
        this.tags = [];
        this.totalAmount = {
            currency: "",
            value: 0,
        };
        this.paidAmount = {
            currency: "",
            value: 0,
        };
        this.dueAmount = {
            currency: "",
            value: 0,
        };
    }
}
exports.Invoice = Invoice;
