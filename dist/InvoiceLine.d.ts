import { Amount } from "./Types";
export interface InvoiceLineInput {
    unitAmount: Amount;
    category: InvoiceLineCategory;
    description: string;
    externalId: string;
    taxReportable: boolean;
    forceUsTaxActivity: boolean;
    tags: string[];
}
declare enum InvoiceLineCategory {
    'services' = 0,
    'rent' = 1,
    'royalties' = 2,
    'royalties_film' = 3,
    'prizes' = 4,
    'education' = 5,
    'refunds' = 6
}
export declare class InvoiceLine {
    id: string;
    status: string;
    description: string;
    quantity: number;
    externalId: string;
    taxReportable: boolean;
    tags: string[];
    category: string;
    forceUsTaxActivity: boolean;
    unitAmount: Amount;
    discountAmount: Amount;
    taxAmount: Amount;
    totalAmount: Amount;
    dueAmount: Amount;
    paidAmount: Amount;
}
export {};
