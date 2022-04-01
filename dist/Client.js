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
const crypto = require("crypto");
const request = require("request");
const exceptions_1 = require("./exceptions");
/**
 * Private function to handle URL requests and standard responses
 * @param options The request to pass to the request library
 * @hidden
 */
function sendRequest(options) {
    return new Promise((resolve, reject) => {
        // tslint:disable-next-line:cyclomatic-complexity
        request(options, (error, response, responseBody) => {
            if (error) {
                reject(new exceptions_1.Exceptions.ServerError(String(error)));
            }
            else {
                try {
                    const data = JSON.parse(responseBody);
                    if (response.statusCode === 200) {
                        resolve(data);
                        return;
                    }
                    const firstErr = (data.errors && Array.isArray(data.errors) && data.errors.length !== 0) ? data.errors[0] : undefined;
                    switch (response.statusCode) {
                        case 400:
                            const message = firstErr.code === "invalid_field" ? `${firstErr.message}: ${firstErr.field}` : firstErr.message;
                            reject(new exceptions_1.Exceptions.Malformed(message || "Not Found"));
                            return;
                        case 401:
                            reject(new exceptions_1.Exceptions.Authentication(firstErr.message || "Not Found"));
                            return;
                        case 403:
                            reject(new exceptions_1.Exceptions.Authorization(firstErr.message || "Not Found"));
                            return;
                        case 404:
                            reject(new exceptions_1.Exceptions.Authorization(firstErr.message || "Not Found"));
                            return;
                        case 500:
                            reject(new exceptions_1.Exceptions.ServerError(firstErr.message || "Not Found"));
                            return;
                        case 503:
                            reject(new exceptions_1.Exceptions.DownForMaintenance(firstErr.message || "Not Found"));
                            return;
                        default:
                            reject(new exceptions_1.Exceptions.Unexpected(`Unexpected HTTP_RESPONSE #${response.statusCode}`));
                    }
                }
                catch (err) {
                    reject(new exceptions_1.Exceptions.Unexpected(String(err)));
                }
            }
        });
    });
}
/**
 * @hidden
 */
class Client {
    constructor(config) {
        this.config = config;
    }
    /**
     * Makes an HTTP GET request to the API
     * @param {string} endPoint
     */
    get(endPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const timestamp = Math.round(date / 1000);
            const authoriation = this.generateAuthorization(timestamp, endPoint, "GET");
            const options = {
                uri: endPoint,
                baseUrl: this.config.apiBase,
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authoriation,
                    "X-PR-Timestamp": timestamp,
                },
            };
            return sendRequest(options);
        });
    }
    /**
     * Makes an HTTP POST request to the API
     * @param {string} endPoint
     * @param {array} body
     */
    post(endPoint, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const timestamp = Math.round(date / 1000);
            const body = payload === undefined ? "{}" : JSON.stringify(payload);
            const authoriation = this.generateAuthorization(timestamp, endPoint, "POST", body);
            const options = {
                uri: this.config.apiBase + endPoint,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authoriation,
                    "X-PR-Timestamp": timestamp,
                },
                body,
            };
            return sendRequest(options);
        });
    }
    /**
     * Makes an HTTP PATCH request to the API
     * @param {string} endPoint
     * @param {array} body
     */
    patch(endPoint, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const timestamp = Math.round(date / 1000);
            const body = payload === undefined ? "{}" : JSON.stringify(payload);
            const authoriation = this.generateAuthorization(timestamp, endPoint, "PATCH", body);
            const options = {
                uri: endPoint,
                baseUrl: this.config.apiBase,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authoriation,
                    "X-PR-Timestamp": timestamp,
                },
                body,
            };
            return sendRequest(options);
        });
    }
    /**
     * Makes an HTTP DELETE request to the API
     * @param {string} endPoint
     */
    remove(endPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const timestamp = Math.round(date / 1000);
            const authoriation = this.generateAuthorization(timestamp, endPoint, "DELETE");
            const options = {
                uri: endPoint,
                baseUrl: this.config.apiBase,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authoriation,
                    "X-PR-Timestamp": timestamp,
                },
            };
            return sendRequest(options);
        });
    }
    /**
     * Generates an authoriztion code
     * @param {string} timestamp
     * @param {string} endPoint
     * @param {string} method
     * @param {object} body (optional)
     */
    generateAuthorization(timestamp, endPoint, method, body = "") {
        try {
            const hmac = crypto.createHmac("sha256", `${this.config.apiSecret}`);
            hmac.update(`${timestamp}\n${method}\n${endPoint}\n${body}\n`);
            const signature = hmac.digest("hex");
            return `prsign ${this.config.apiKey}:${signature}`;
        }
        catch (typeError) {
            return "prsign 1:1";
        }
    }
}
exports.Client = Client;
