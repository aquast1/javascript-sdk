"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipientGateway_1 = require("./RecipientGateway");
const RecipientAccountGateway_1 = require("./RecipientAccountGateway");
const BatchGateway_1 = require("./BatchGateway");
const PaymentGateway_1 = require("./PaymentGateway");
const BalancesGateway_1 = require("./BalancesGateway");
const OfflinePaymentGateway_1 = require("./OfflinePaymentGateway");
const Client_1 = require("./Client");
class Gateway {
    /**
     * This should be called by the connect() method to setup a client gateway
     * @param config Configuration parameters
     * @hidden
     */
    constructor(config) {
        this.config = config;
        this.client = new Client_1.Client(config);
        this.recipient = new RecipientGateway_1.RecipientGateway(this);
        this.batch = new BatchGateway_1.BatchGateway(this);
        this.recipientAccount = new RecipientAccountGateway_1.RecipientAccountGateway(this);
        this.balances = new BalancesGateway_1.BalancesGateway(this);
        this.payment = new PaymentGateway_1.PaymentGateway(this);
        this.offlinePayment = new OfflinePaymentGateway_1.OfflinePaymentGateway(this);
    }
}
exports.Gateway = Gateway;
