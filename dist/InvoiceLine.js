"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InvoiceLineCategory;
(function (InvoiceLineCategory) {
    InvoiceLineCategory[InvoiceLineCategory["services"] = 0] = "services";
    InvoiceLineCategory[InvoiceLineCategory["rent"] = 1] = "rent";
    InvoiceLineCategory[InvoiceLineCategory["royalties"] = 2] = "royalties";
    InvoiceLineCategory[InvoiceLineCategory["royalties_film"] = 3] = "royalties_film";
    InvoiceLineCategory[InvoiceLineCategory["prizes"] = 4] = "prizes";
    InvoiceLineCategory[InvoiceLineCategory["education"] = 5] = "education";
    InvoiceLineCategory[InvoiceLineCategory["refunds"] = 6] = "refunds";
})(InvoiceLineCategory || (InvoiceLineCategory = {}));
class InvoiceLine {
    constructor() {
        this.id = '';
        this.status = '';
        this.description = '';
        this.quantity = 0;
        this.externalId = '';
        this.taxReportable = false;
        this.tags = [];
        this.category = '';
        this.forceUsTaxActivity = false;
        this.unitAmount = {
            currency: '',
            value: 0,
        };
        this.discountAmount = {
            currency: '',
            value: 0,
        };
        this.taxAmount = {
            currency: '',
            value: 0,
        };
        this.totalAmount = {
            currency: '',
            value: 0,
        };
        this.dueAmount = {
            currency: '',
            value: 0,
        };
        this.paidAmount = {
            currency: '',
            value: 0,
        };
    }
}
exports.InvoiceLine = InvoiceLine;
