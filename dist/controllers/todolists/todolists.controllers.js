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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_controller_1 = __importDefault(require("../../abstract/abstract.controller"));
const todolist_service_1 = __importDefault(require("../../services/todolist.service"));
const todolists_validator_1 = __importDefault(require("../../validators/todolists/todolists.validator"));
class TodoListController extends abstract_controller_1.default {
    constructor() {
        super();
        this.todoListService = new todolist_service_1.default();
        this.todoListValidator = new todolists_validator_1.default();
        this.createTodoListController = this.asyncWrapper.wrap({ bodySchema: this.todoListValidator.createTodoListValidator }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.todoListService.createTodoListService(req), { code } = _a, rest = __rest(_a, ["code"]);
            res.status(code).json(rest);
        }));
        this.getTaskListsController = this.asyncWrapper.wrap(null, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.todoListService.getTaskListsService(), { code } = _a, rest = __rest(_a, ["code"]);
            res.status(code).json(rest);
        }));
        this.getTaskListController = this.asyncWrapper.wrap({ paramSchema: this.todoListValidator.getSingleTodoListValidatior }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.todoListService.getTaskListService(req), { code } = _a, rest = __rest(_a, ["code"]);
            res.status(code).json(rest);
        }));
        this.deleteTaskListController = this.asyncWrapper.wrap({ paramSchema: this.todoListValidator.getSingleTodoListValidatior }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.todoListService.deleteTaskListService(req), { code } = _a, rest = __rest(_a, ["code"]);
            res.status(code).json(rest);
        }));
        this.updateTaskListTitleController = this.asyncWrapper.wrap({
            paramSchema: this.todoListValidator.getSingleTodoListValidatior,
            bodySchema: this.todoListValidator.createTodoListValidator
        }, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = yield this.todoListService.updateTaskListService(req), { code } = _a, rest = __rest(_a, ["code"]);
            res.status(code).json(rest);
        }));
    }
}
exports.default = TodoListController;
