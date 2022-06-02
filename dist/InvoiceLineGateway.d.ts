import { Gateway } from "./Gateway";
import { Configuration } from "./Configuration";
import { InvoiceLineInput } from "./InvoiceLine";
export declare class InvoiceLineGateway {
    gateway: Gateway;
    config: Configuration;
    constructor(gateway: Gateway);
    create(invoiceId: string, invoiceLines: InvoiceLineInput[]): Promise<any>;
    update(invoiceId: string, body: any): Promise<any>;
    delete(invoiceId: string, lineIds: string[]): Promise<boolean>;
}
