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
 * Balance information for a given account type and/or currency
 * @name Balance
 */
// tslint:disable:function-name
class Balance {
    constructor() {
        this.primary = false;
        this.amount = "0.00";
        this.currency = "";
        this.type = "";
        this.accountNumber = "";
    }
    /**
     * Retrieves the balance based on the api key
     * @param {string} term
     * @hidden
     */
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().balances.all();
        });
    }
    /**
     * Retrieves the balance based on the api key
     * @param {string} term
     * @hidden
     */
    static find(term) {
        return __awaiter(this, void 0, void 0, function* () {
            return Configuration_1.Configuration.gateway().balances.find(term);
        });
    }
    /**
     * Construct a balance object from a response
     * @param balance
     * @hidden
     */
    static factory(balance) {
        const instance = new Balance();
        instance._initialize(balance);
        return instance;
    }
    /**
     * Construct a balance object from a response, implementation
     * @hidden
     */
    _initialize(balance) {
        Object.keys(balance).forEach(k => {
            this[k] = balance[k];
        });
    }
}
exports.Balance = Balance;
