"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./Gateway");
// tslint:disable:function-name
class Configuration {
    /**
     * Internal constructor
     * @hidden
     */
    constructor(config) {
        this.apiKey = (config && config.key) || Configuration.apiKeyDefault;
        this.apiSecret =
            (config && config.secret) || Configuration.apiSecretDefault;
        if (config && config.environment) {
            this.apiBase = Configuration.environmentToUrl(config.environment);
        }
        else {
            this.apiBase = Configuration.apiBaseDefault;
        }
    }
    /**
     * Globally set the public API key to connect to Payment Rails
     * @param key Your Payment Rails API public key
     */
    static setApiKey(key) {
        Configuration.apiKeyDefault = key;
    }
    /**
     * Globally set the secret API key to connect to Payment Rails
     * @param secret Your Payment Rails API secret Key
     */
    static setApiSecret(secret) {
        Configuration.apiSecretDefault = secret;
    }
    /**
     * Function to construct a gateway for this configuration
     * @hidden
     */
    static gateway() {
        const config = new Configuration();
        return new Gateway_1.Gateway(config);
    }
    /**
     * Set the base URL to use to connect to the API gateway
     * @param baseUrl url root
     * @hidden
     */
    static setApiBase(baseUrl) {
        Configuration.apiBaseDefault = baseUrl;
    }
    /**
     * Set the Payment Rails API environment that your using
     * @param environment one of "production" or "sandbox"
     */
    static setEnvironment(environment) {
        Configuration.apiBaseDefault = Configuration.environmentToUrl(environment);
    }
    /**
     * Private method that converts an environment to a specific URL
     * @param environment "production" | "sandbox"
     * @hidden
     */
    static environmentToUrl(environment) {
        switch (environment) {
            case "integration":
                // tslint:disable-next-line:no-http-string
                return "http://api.local.dev:3000";
            case "sandbox":
                return "https://api.sandbox.paymentrails.com";
            case "production":
                return "https://api.paymentrails.com";
            default:
                return "https://api.paymentrails.com";
        }
    }
}
/**
 * @hidden
 */
Configuration.apiBaseDefault = "https://api.paymentrails.com";
exports.Configuration = Configuration;
