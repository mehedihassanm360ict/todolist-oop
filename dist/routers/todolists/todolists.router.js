"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_router_1 = __importDefault(require("../../abstract/abstract.router"));
const todolists_controllers_1 = __importDefault(require("../../controllers/todolists/todolists.controllers"));
class TodoListRouter extends abstract_router_1.default {
    constructor() {
        super();
        this.todoListController = new todolists_controllers_1.default();
        this.callRouter();
    }
    ;
    callRouter() {
        this.router.route('/')
            .post(this.todoListController.createTodoListController)
            .get(this.todoListController.getTaskListsController);
        // get single
        this.router.route('/:list_id')
            .get(this.todoListController.getTaskListController)
            .delete(this.todoListController.deleteTaskListController);
    }
}
exports.default = TodoListRouter;
