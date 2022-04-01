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
const Configuration_1 = require("./Configuration");
/**
 * @name RecipientAccount
 */
// tslint:disable:function-name
class RecipientAccount {
    constructor() {
        this.id = "";
        this.primary = false;
        this.currency = "";
    }
    /**
     * Retrieves the payout method based on the recipient id
     * @param {string} recipientId
     * @param {string} recipientAccountId
     * @hidden
     */
    static all(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipientAccount.all(recipientId);
        });
    }
    /**
     * Retrieves the payout method based on the recipient id
     * @param {string} recipientId
     * @param {string} recipientAccountId
     * @hidden
     */
    static find(recipientId, recipientAccountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipientAccount.find(recipientId, recipientAccountId);
        });
    }
    /**
     * Creates a payout method based on the body and recipient id
     * @param {string} recipientId
     * @param {array} body
     * @hidden
     */
    static create(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipientAccount.create(recipientId, body);
        });
    }
    /**
     * Updates a payout method based on the body and the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     * @hidden
     */
    static update(recipientId, recipientAccountId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipientAccount.update(recipientId, recipientAccountId, body);
        });
    }
    /**
     * Delete a payout method based on the recipient id
     * @param {string} recipientId
     * @param {array} body
     * @param {string} recipientAccountId
     * @hidden
     */
    static remove(recipientId, recipientAccountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipientAccount.remove(recipientId, recipientAccountId);
        });
    }
    /**
     * @param account
     * @param account
     * @hidden
     */
    static factory(account) {
        const instance = new RecipientAccount();
        instance._initialize(account);
        return instance;
    }
    /**
     * @param account
     * @hidden
     */
    _initialize(account) {
        Object.keys(account).forEach(k => {
            this[k] = account[k];
        });
    }
}
exports.RecipientAccount = RecipientAccount;
