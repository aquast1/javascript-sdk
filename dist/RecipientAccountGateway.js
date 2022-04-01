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
const RecipientAccount_1 = require("./RecipientAccount");
const util_1 = require("./util");
class RecipientAccountGateway {
    /**
     * @private
     */
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
    /**
     * Fetch all of the accounts for a given Payment Rails recipient
     * ```
     * const accounts = await client.recipientAccount.all('R-1234');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @throws {NotFound} if recipient doesn't exist
     */
    all(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId, 'accounts');
            const result = yield this.gateway.client.get(endPoint);
            return result.accounts.map(a => RecipientAccount_1.RecipientAccount.factory(a));
        });
    }
    /**
     * Fetch a specific account for a given Payment Rails recipient
     * ```
     * const account = await client.recipientAccount.find('R-1234', 'A-789');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     * @throws {NotFound} if account or recipient don't exist
     */
    find(recipientId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId, 'accounts', accountId);
            const result = yield this.gateway.client.get(endPoint);
            return RecipientAccount_1.RecipientAccount.factory(result.account);
        });
    }
    /**
     * Create a new recipient account
     * ```
     * const account = await client.recipientAccount.create('R-1234', {
     *   type: "bank-transfer",
     *   primary: true,
     *   country: "CA",
     *   currency: "CAD",
     *   accountNum: "012345678",
     *   bankId: "004",
     *   branchId: "47261",
     *   accountHolderName: "John Smith",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param body Account information
     */
    create(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId, 'accounts');
            const result = yield this.gateway.client.post(endPoint, body);
            return RecipientAccount_1.RecipientAccount.factory(result.account);
        });
    }
    /**
     * Update a recipient account.
     *   Note: Updating an account will create a new account ID if it contains any property that
     *         isn't just "primary"
     * ```
     * const account = await client.recipientAccount.update('R-1234', 'A-789', {
     *   accountHolderName: "Tom Jones",
     * });
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     * @param body Account information
     */
    update(recipientId, accountId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId, 'accounts', accountId);
            const result = yield this.gateway.client.patch(endPoint, body);
            return RecipientAccount_1.RecipientAccount.factory(result.account);
        });
    }
    /**
     * Delete the given recipient account. This will only return success, otherwise it will
     * throw an exception (e.g. NotFound)
     * ```
     * const success = await client.recipientAccount.remove('R-1234', 'A-789');
     * ```
     * @param recipientId The Payment Rails recipient ID (e.g. R-xyzzy)
     * @param accountId The Payment Rails account ID (e.g. A-xyzzy)
     */
    remove(recipientId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('recipients', recipientId, 'accounts', accountId);
            const result = yield this.gateway.client.remove(endPoint);
            return true;
        });
    }
}
exports.RecipientAccountGateway = RecipientAccountGateway;
