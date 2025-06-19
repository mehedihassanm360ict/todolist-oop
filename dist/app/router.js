"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todolists_router_1 = __importDefault(require("../routers/todolists/todolists.router"));
class RootRouter {
    constructor() {
        this.v1Router = (0, express_1.Router)();
        this.callV1Router();
    }
    callV1Router() {
        this.v1Router.use('/tasks', new todolists_router_1.default().router);
    }
}
exports.default = RootRouter;
