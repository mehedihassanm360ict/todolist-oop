import { Request, Response } from "express";
import AbstractController from "../../abstract/abstract.controller";
import TodoListService from "../../services/todolist.service";
import TodoListValidator from "../../validators/todolists/todolists.validator";

class TodoListController extends AbstractController{
    private todoListService = new TodoListService();
    private todoListValidator = new TodoListValidator();

    constructor() {
        super();
    }

    public createTodoListController = this.asyncWrapper.wrap(
        {bodySchema: this.todoListValidator.createTodoListValidator},
        async(req:Request, res: Response) => {
            const {code, ...rest} = await this.todoListService.createTodoListService(req);
            res.status(code).json(rest);
        }
    )

    public getTaskListsController = this.asyncWrapper.wrap( null, async(req:Request, res: Response) => {
        const {code, ...rest} = await this.todoListService.getTaskListsService()
        res.status(code).json(rest);
    })

    public getTaskListController = this.asyncWrapper.wrap(
        {paramSchema: this.todoListValidator.getSingleTodoListValidatior},
        async (req:Request, res: Response) => {
            console.log('from controllers', req.params);
            const {code, ...rest} = await this.todoListService.getTaskListService(req);
            res.status(code).json(rest);
        }
    )
}

export default TodoListController;