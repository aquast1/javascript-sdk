"use strict";
// tslint:disable:max-classes-per-file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module exceptions
 */
var Exceptions;
(function (Exceptions) {
    class BaseException extends Error {
    }
    Exceptions.BaseException = BaseException;
    class DownForMaintenance extends BaseException {
    }
    Exceptions.DownForMaintenance = DownForMaintenance;
    class ServerError extends BaseException {
    }
    Exceptions.ServerError = ServerError;
    class Unexpected extends BaseException {
    }
    Exceptions.Unexpected = Unexpected;
    class NotFound extends BaseException {
    }
    Exceptions.NotFound = NotFound;
    class Authentication extends BaseException {
    }
    Exceptions.Authentication = Authentication;
    class Authorization extends BaseException {
    }
    Exceptions.Authorization = Authorization;
    class Malformed extends BaseException {
    }
    Exceptions.Malformed = Malformed;
})(Exceptions = exports.Exceptions || (exports.Exceptions = {}));
