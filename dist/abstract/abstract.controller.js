"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = __importDefault(require("../common/validators"));
const asyncWrapper_1 = __importDefault(require("../common/middleware/asyncWrapper"));
const statusCode_1 = __importDefault(require("../utils/miscellaneous/statusCode"));
const customError_1 = __importDefault(require("../utils/lib/customError"));
const responseMessage_1 = __importDefault(require("../utils/miscellaneous/responseMessage"));
class AbstractController {
    constructor() {
        this.StatusCode = statusCode_1.default;
        this.asyncWrapper = new asyncWrapper_1.default();
        this.CommonValidator = new validators_1.default();
    }
    error(message, status) {
        throw new customError_1.default(message || responseMessage_1.default.HTTP_INTERNAL_SERVER_ERROR, status || statusCode_1.default.HTTP_INTERNAL_SERVER_ERROR);
    }
}
exports.default = AbstractController;
