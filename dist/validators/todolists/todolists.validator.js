"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class TodoListValidator {
    constructor() {
        this.createTodoListValidator = joi_1.default.object({
            title: joi_1.default.string().required().messages({
                'string.empty': 'Title cannot be empty',
                'any.required': 'title is required'
            }),
        });
    }
}
exports.default = TodoListValidator;
