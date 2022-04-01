import { Configuration } from "./Configuration";
/**
 * @hidden
 */
export declare class Client {
    config: Configuration;
    constructor(config: Configuration);
    /**
     * Makes an HTTP GET request to the API
     * @param {string} endPoint
     */
    get<T>(endPoint: string): Promise<T>;
    /**
     * Makes an HTTP POST request to the API
     * @param {string} endPoint
     * @param {array} body
     */
    post<T>(endPoint: string, payload?: any): Promise<T>;
    /**
     * Makes an HTTP PATCH request to the API
     * @param {string} endPoint
     * @param {array} body
     */
    patch<T>(endPoint: string, payload: any): Promise<T>;
    /**
     * Makes an HTTP DELETE request to the API
     * @param {string} endPoint
     */
    remove<T>(endPoint: string): Promise<T>;
    /**
     * Generates an authoriztion code
     * @param {string} timestamp
     * @param {string} endPoint
     * @param {string} method
     * @param {object} body (optional)
     */
    generateAuthorization(timestamp: number, endPoint: string, method: string, body?: string): string;
}
