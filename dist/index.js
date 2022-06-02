"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./Gateway");
const Configuration_1 = require("./Configuration");
exports.Configuration = Configuration_1.Configuration;
var Gateway_2 = require("./Gateway");
exports.Gateway = Gateway_2.Gateway;
var Recipient_1 = require("./Recipient");
exports.Recipient = Recipient_1.Recipient;
var RecipientAccount_1 = require("./RecipientAccount");
exports.RecipientAccount = RecipientAccount_1.RecipientAccount;
var Balance_1 = require("./Balance");
exports.Balance = Balance_1.Balance;
var Batch_1 = require("./Batch");
exports.Batch = Batch_1.Batch;
var Payment_1 = require("./Payment");
exports.Payment = Payment_1.Payment;
var OfflinePayment_1 = require("./OfflinePayment");
exports.OfflinePayment = OfflinePayment_1.OfflinePayment;
var Invoice_1 = require("./Invoice");
exports.Invoice = Invoice_1.Invoice;
/**
 * Create a client for the Payment Rails JavasScript API
 * ```
 * const client = paymentrails.connect({
 *   key: "MY_PUBLIC_KEY",
 *   secret: "MY_PRIVATE_KEY",
 * });
 * ```
 * @param config The configuration parameters
 */
function connect(config) {
    return new Gateway_1.Gateway(new Configuration_1.Configuration(config));
}
exports.connect = connect;
exports.default = connect;
