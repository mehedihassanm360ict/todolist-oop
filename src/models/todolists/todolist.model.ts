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
        
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .insert(payload, "list_id")

        return data;
    }

    public async getTaskLists(){
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .select()

        return data;
    }

    public async getTaskList(list_id: number) {
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .where('list_id', list_id);

        return data;
    }

    public async deleteTaskList(list_id: number) {
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .where('list_id', list_id)
        .del();

        return data;
    }
}

export default TodoListModel;