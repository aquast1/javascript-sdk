import { Gateway } from "./Gateway";
export interface ConfigurationParams {
    /**
     * The Payment Rails public key
     */
    key: string;
    /**
     * The Payment Rails private key
     */
    secret: string;
    /**
     * The environment that you're using, most likely one of "production" or "sandbox"
     */
    environment?: "production" | "sandbox" | "integration" | "development";
}
export declare class Configuration {
    /**
     * @hidden
     */
    static apiKeyDefault: string;
    /**
     * @hidden
     */
    static apiSecretDefault: string;
    /**
     * @hidden
     */
    static apiBaseDefault: string;
    apiKey: string;
    apiSecret: string;
    apiBase: string;
    /**
     * Internal constructor
     * @hidden
     */
    constructor(config?: ConfigurationParams);
    /**
     * Globally set the public API key to connect to Payment Rails
     * @param key Your Payment Rails API public key
     */
    static setApiKey(key: string): void;
    /**
     * Globally set the secret API key to connect to Payment Rails
     * @param secret Your Payment Rails API secret Key
     */
    static setApiSecret(secret: string): void;
    /**
     * Function to construct a gateway for this configuration
     * @hidden
     */
    static gateway(): Gateway;
    /**
     * Set the base URL to use to connect to the API gateway
     * @param baseUrl url root
     * @hidden
     */
    static setApiBase(baseUrl: string): void;
    /**
     * Set the Payment Rails API environment that your using
     * @param environment one of "production" or "sandbox"
     */
    static setEnvironment(environment: "production" | "sandbox" | "integration"): void;
    /**
     * Private method that converts an environment to a specific URL
     * @param environment "production" | "sandbox"
     * @hidden
     */
    private static environmentToUrl;
}
