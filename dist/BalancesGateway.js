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
const Balance_1 = require("./Balance");
const util_1 = require("./util");
class BalancesGateway {
    /**
     * @private
     * @param gateway gateway object
     */
    constructor(gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }
    /**
     * Fetch the account balance for all enabled bank accounts
     * ```
     * const balances = await client.balances.all();
     * ```
     */
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('profile', 'balances');
            const result = yield this.gateway.client.get(endPoint);
            return Object.values(result.balances).map(Balance_1.Balance.factory);
        });
    }
    /**
     * Fetch the account balance for the given account type
     * ```
     * const balances = await client.balances.find("paymentrails");
     * ```
     * @param kind The account type to get the balances for
     */
    find(kind) {
        return __awaiter(this, void 0, void 0, function* () {
            const endPoint = util_1.buildURL('profile', 'balances', kind);
            const result = yield this.gateway.client.get(endPoint);
            return Object.values(result.balances).map(Balance_1.Balance.factory);
        });
    }
}
exports.BalancesGateway = BalancesGateway;
