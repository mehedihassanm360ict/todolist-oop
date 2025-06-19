import { TDB } from "../../common/types";
import { ITodoListPayload } from "../../interface.ts/todolists/todoLists.interface";
import Schema from "../../utils/miscellaneous/schema";

class TodoListModel extends Schema{
    private db:TDB;

    constructor(db:TDB){
        super();
        this.db = db;
    }

    public async createTaskList(payload: ITodoListPayload){
        console.log({payload})
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .insert(payload, "list_id")

        return data;
    }
}

export default TodoListModel;