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
const Recipient_1 = require("./Recipient");
const util_1 = require("./util");
const querystring = require("querystring");
class RecipientGateway {
    /**
     * @param gateway gateway object
     * @private
     */
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
    /**
     * Find a specific recipient by their Payment Rails recipient ID
     * ```
     * const recipient = await client.recipient.find('R-1234');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     */
    find(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId);
            const result = yield this.gateway.client.get(endPoint);
            return Recipient_1.Recipient.factory(result.recipient);
        });
    }
    /**
     * Create a given recipient
     * ```
     * const recipient = await client.recipient.create({
     *   type: "individual",
     *   firstName: "Tom",
     *   lastName: "Jones",
     *   email: "tom.jones@example.com",
     *   address: {
     *      street1: "123 Main St",
     *      country: "US",
     *   }
     * });
     * ```
     * @param body The recipient information to create
     */
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients');
            const result = yield this.gateway.client.post(endPoint, body);
            return Recipient_1.Recipient.factory(result.recipient);
        });
    }
    /**
     * Update the given recipient
     * ```
     * const recipient = await client.recipient.update('R-1234', {
     *   firstName: "Carl",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param body the changes to make to the recipient
     */
    update(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId);
            const result = yield this.gateway.client.patch(endPoint, body);
            return true;
        });
    }
    /**
     * Delete the given recipient.
     * ```
     * const status = await client.recipient.remove('R-123');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     */
    remove(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId);
            const result = yield this.gateway.client.remove(endPoint);
            return true;
        });
    }
    search(page, pageSize, term, referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line:max-line-length
            const endPoint = util_1.buildURL('recipients');
            const query = querystring.stringify({
                page,
                pageSize,
                search: term,
                referenceId
            });
            const result = yield this.gateway.client.get(`${endPoint}?${query}`);
            return result.recipients.map(r => Recipient_1.Recipient.factory(r));
        });
    }
}
exports.RecipientGateway = RecipientGateway;
