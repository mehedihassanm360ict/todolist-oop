import { Request } from "express";
import AbstractServices from "../abstract/abstract.service";
import { DB } from "../app/database";
import { ITodoListPayload } from "../interface.ts/todolists/todoLists.interface";

class TodoListService extends AbstractServices{

    constructor() {
        super();
    }

    public async createTodoListService(req:Request) {
        return await DB.transaction(async(trx) => {
            const body = req.body as ITodoListPayload;
            const taskListModel = this.Model.taskListModel(trx);
            const result = await taskListModel.createTaskList(body);
            
            if(!result.length){
                return {
                    success: false,
                    code: this.StatusCode.HTTP_BAD_REQUEST,
                    message: this.ResMsg.HTTP_BAD_REQUEST,
                    data: null,
                }
            }

            return {
                success: true,
                code: this.StatusCode.HTTP_OK,
                message: this.ResMsg.HTTP_OK,
                data: result[0].list_id,
            }
        })
    }
}


export default TodoListService;