/**
 * @module exceptions
 */
export declare namespace Exceptions {
    class BaseException extends Error {
    }
    class DownForMaintenance extends BaseException {
    }
    class ServerError extends BaseException {
    }
    class Unexpected extends BaseException {
    }
    class NotFound extends BaseException {
    }
    class Authentication extends BaseException {
    }
    class Authorization extends BaseException {
    }
    class Malformed extends BaseException {
    }
}
