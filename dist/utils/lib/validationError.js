"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode_1 = __importDefault(require("../miscellaneous/statusCode"));
class ValidationError extends Error {
    constructor(error) {
        super(error.array()[0].msg);
        this.status = statusCode_1.default.HTTP_UNPROCESSABLE_ENTITY;
        this.type = "Validation Error";
        this.errors = error.array().map((err) => ({
            path: err.path,
            msg: err.msg
        }));
    }
}
exports.default = ValidationError;
