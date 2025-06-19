"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/miscellaneous/constants");
const router_1 = __importDefault(require("./router"));
class App {
    constructor(port) {
        this.origin = constants_1.origin;
        this.app = (0, express_1.default)();
        this.port = port;
        this.initMiddleware();
        this.initRouters();
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server launched successfully on port ${this.port}`);
            console.log(`⏰ Started at: ${new Date().toISOString()}`);
            console.log(`🔗 Access: http://localhost:${this.port}`);
        });
    }
    initMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)({ origin: this.origin, credentials: true }));
    }
    initRouters() {
        this.app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Servier is running');
        }));
        this.app.use('/api/v1', new router_1.default().v1Router);
    }
}
exports.default = App;
