import { InvoiceLine, InvoiceLineInput } from "./InvoiceLine";
import { Amount } from "./Types";
export interface InvoiceInput {
    recipientId: string;
    description: string;
    externalId: string;
    invoiceDate: string;
    dueDate: string;
    lines: InvoiceLineInput[];
}
export declare class Invoice {
    id: string;
    recipientId: string;
    description: string;
    externalId: string;
    invoiceDate: string;
    invoiceNumber: number;
    dueDate: string;
    status: string;
    releaseAfter: string;
    createdAt: string;
    updatedAt: string;
    lines: InvoiceLine[];
    tags: string[];
    totalAmount: Amount;
    paidAmount: Amount;
    dueAmount: Amount;
}
