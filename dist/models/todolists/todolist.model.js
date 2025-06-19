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
const schema_1 = __importDefault(require("../../utils/miscellaneous/schema"));
class TodoListModel extends schema_1.default {
    constructor(db) {
        super();
        this.db = db;
    }
    createTaskList(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.db('todo_lists')
                .withSchema(this.SCHEMA_DBO)
                .insert(payload, "list_id");
            return data;
        });
    }
    getTaskLists() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.db('todo_lists')
                .withSchema(this.SCHEMA_DBO)
                .select();
            return data;
        });
    }
    getTaskList(list_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.db('todo_lists')
                .withSchema(this.SCHEMA_DBO)
                .where('list_id', list_id);
            return data;
        });
    }
    deleteTaskList(list_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.db('todo_lists')
                .withSchema(this.SCHEMA_DBO)
                .where('list_id', list_id)
                .del();
            return data;
        });
    }
    updateTaskList(list_id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.db('todo_lists')
                .withSchema(this.SCHEMA_DBO)
                .where('list_id', list_id)
                .update(payload);
            return data;
        });
    }
}
exports.default = TodoListModel;
