"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../../.env') });
const getConfig = () => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : 5008,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASS: process.env.DB_PASS,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
    };
};
const getSanitizedConfig = (config) => {
    for (const [key, value] of Object.entries(config)) {
        if (value == undefined) {
            throw new Error(`Configuration error: Required environment variable '${key}' is missing or empty. Please check your .env file.`);
        }
    }
    return config;
};
exports.default = getSanitizedConfig(getConfig());
