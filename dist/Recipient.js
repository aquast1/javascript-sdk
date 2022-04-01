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
const RecipientAccount_1 = require("./RecipientAccount");
/**
 * @name Recipient
 */
// tslint:disable:function-name
class Recipient {
    constructor() {
        this.id = "";
        this.referenceId = "";
        this.email = "";
        this.name = "";
        this.lastName = "";
        this.firstName = "";
        this.type = "";
        this.taxType = "";
        this.status = "";
        this.language = "";
        this.complianceStatus = "";
        this.dob = "";
        this.passport = "";
        this.updatedAt = "";
        this.createdAt = "";
        this.address = {
            street1: "",
            street2: "",
            city: "",
            postalCode: "",
            country: "",
            region: "",
            phone: "",
            phoneValidated: false,
        };
        this.compliance = { status: "", checkedAt: "" };
        this.gravatarUrl = "";
        this.governmentId = null;
        this.ssn = null;
        this.accounts = [];
        this.primaryCurrency = null;
        this.routeType = null;
        this.estimatedFees = null;
    }
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
     * Retrieves a recipient based on the recipient id given or
     * retrieves a list of payments or logs depending on the term
     * @param {string} recipientId
     * @param {string} term
     */
    static find(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipient.find(recipientId);
        });
    }
    /**
     * Creates a recipient based on the body given to the client
     * @param {array} body
     */
    static create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipient.create(body);
        });
    }
    /**
     * Updates a recipient based on the body given to the client
     * and the recipient id
     * @param {string} recipientId
     * @param {array} body
     */
    static update(recipientId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipient.update(recipientId, body);
        });
    }
    /**
     * Delete a recipient based on the recipient id
     * @param {string} recipientId
     */
    static remove(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipient.remove(recipientId);
        });
    }
    /**
     * List all recipients based on the recipient id and
     *  (optional) a given wildcard, page amount and page size
     * @param {int} page
     * @param {int} pageSize
     * @param {string} search
     */
    static search(page = 1, pageSize = 10, term = "", referenceId = "") {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().recipient.search(page, pageSize, term, referenceId);
        });
    }
    /**
     * Should only be called by the Gateway
     */
    static factory(recipient) {
        const instance = new Recipient();
        instance._initialize(recipient);
        return instance;
    }
    _initialize(recipient) {
        Object.keys(recipient).forEach(k => {
            if (k === "accounts") {
                this.accounts = recipient.accounts.map(a => RecipientAccount_1.RecipientAccount.factory(a));
            }
            else {
                this[k] = recipient[k];
            }
        });
    }
}
exports.Recipient = Recipient;
