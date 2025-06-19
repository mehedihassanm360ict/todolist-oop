import { Router } from "express";
import TodoListRouter from "../routers/todolists/todolists.router";

class RootRouter {
    public v1Router = Router();

    constructor(){
        this.callV1Router();
    }

    private callV1Router(){
        this.v1Router.use('/tasks', new TodoListRouter().router)
    }
}

export default RootRouter;