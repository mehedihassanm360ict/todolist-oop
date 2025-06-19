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
const abstract_service_1 = __importDefault(require("../abstract/abstract.service"));
const database_1 = require("../app/database");
class TodoListService extends abstract_service_1.default {
    constructor() {
        super();
    }
    createTodoListService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.DB.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const taskListModel = this.Model.taskListModel(trx);
                const result = yield taskListModel.createTaskList(body);
                if (!result.length) {
                    return {
                        success: false,
                        code: this.StatusCode.HTTP_BAD_REQUEST,
                        message: this.ResMsg.HTTP_BAD_REQUEST,
                        data: null,
                    };
                }
                return {
                    success: true,
                    code: this.StatusCode.HTTP_OK,
                    message: this.ResMsg.HTTP_OK,
                    data: result[0].list_id,
                };
            }));
        });
    }
    getTaskListsService() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.DB.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                const taskListModel = this.Model.taskListModel(trx);
                const result = yield taskListModel.getTaskLists();
                return {
                    success: true,
                    code: this.StatusCode.HTTP_OK,
                    message: this.ResMsg.HTTP_OK,
                    data: result
                };
            }));
        });
    }
    getTaskListService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.DB.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                const list_id = Number(req.params.list_id);
                if (isNaN(list_id)) {
                    throw new Error("Invalid list_id parameter");
                }
                const taskListModel = this.Model.taskListModel(trx);
                const result = yield taskListModel.getTaskList(list_id);
                console.log('from service', result);
                if (!result.length) {
                    return {
                        success: false,
                        code: this.StatusCode.HTTP_BAD_REQUEST,
                        message: this.ResMsg.HTTP_BAD_REQUEST,
                        data: null,
                    };
                }
                return {
                    success: true,
                    code: this.StatusCode.HTTP_OK,
                    message: this.ResMsg.HTTP_OK,
                    data: result,
                };
            }));
        });
    }
    deleteTaskListService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.DB.transaction((trx) => __awaiter(this, void 0, void 0, function* () {
                const list_id = Number(req.params.list_id);
                if (isNaN(list_id)) {
                    throw new Error("Invalid list_id parameter");
                }
                const taskListModel = this.Model.taskListModel(trx);
                const result = yield taskListModel.deleteTaskList(list_id);
                if (!result) {
                    return {
                        success: false,
                        code: this.StatusCode.HTTP_BAD_REQUEST,
                        message: this.ResMsg.HTTP_BAD_REQUEST,
                        data: null,
                    };
                }
                return {
                    success: true,
                    code: this.StatusCode.HTTP_OK,
                    message: this.ResMsg.HTTP_OK,
                    data: result,
                };
            }));
        });
    }
}
exports.default = TodoListService;
