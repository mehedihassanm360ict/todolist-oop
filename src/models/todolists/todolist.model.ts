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

    public async getTaskLists(){
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .select()

        return data;
    }

    public async getTaskList(payload: number) {
        const data = await this.db('todo_lists')
        .withSchema(this.SCHEMA_DBO)
        .where((qb) => {
            qb.andWhere('todo_lists.list_id', payload)
        })

        return data;
    }
}

export default TodoListModel;