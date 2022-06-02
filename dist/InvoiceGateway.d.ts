import { Configuration } from './Configuration';
import { Gateway } from './Gateway';
import { InvoiceInput } from './Invoice';
export declare class InvoiceGateway {
    gateway: Gateway;
    config: Configuration;
    constructor(gateway: Gateway);
    find(invoiceId: string): Promise<any>;
    create(body: InvoiceInput): Promise<any>;
    update(invoiceId: string, body: InvoiceInput): Promise<any>;
    remove(invoiceIds: string[]): Promise<boolean>;
    search(body: any): Promise<any>;
}
