import { Configuration } from "./Configuration";
import { RecipientGateway } from "./RecipientGateway";
import { RecipientAccountGateway } from "./RecipientAccountGateway";
import { BatchGateway } from "./BatchGateway";
import { PaymentGateway } from "./PaymentGateway";
import { BalancesGateway } from "./BalancesGateway";
import { OfflinePaymentGateway } from "./OfflinePaymentGateway";
import { Client } from "./Client";
export declare class Gateway {
    config: Configuration;
    client: Client;
    recipient: RecipientGateway;
    batch: BatchGateway;
    recipientAccount: RecipientAccountGateway;
    balances: BalancesGateway;
    payment: PaymentGateway;
    offlinePayment: OfflinePaymentGateway;
    /**
     * This should be called by the connect() method to setup a client gateway
     * @param config Configuration parameters
     * @hidden
     */
    constructor(config: Configuration);
}
