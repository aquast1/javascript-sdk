"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Build a URL to call the API with, making sure everything is encoded
 * @param base
 * @param parts any additional path components
 * @hidden
 */
function buildURL(base, ...parts) {
    return ['', 'v1'].concat([base], parts).map(encodeURIComponent).join('/');
}
exports.buildURL = buildURL;
