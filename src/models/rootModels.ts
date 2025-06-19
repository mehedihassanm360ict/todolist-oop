import { Knex } from "knex";
import { DB } from "../app/database";
import TaskListModel from "./todolists/todolist.model";

class Models {
    private db:Knex = DB;

    public taskListModel(trx?: Knex.Transaction){
        return new TaskListModel(trx || this.db);
    }
}

export default Models;