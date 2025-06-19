import AbstractRouter from "../../abstract/abstract.router";
import TodoListController from "../../controllers/todolists/todolists.controllers";

class TodoListRouter extends AbstractRouter {
    private todoListController = new TodoListController();

    constructor(){
        super();
        this.callRouter();
    };

    private callRouter(){
        this.router.route('/')
        .post(this.todoListController.createTodoListController)
        .get(this.todoListController.getTaskListsController);

        // get single
        this.router.route('/:list_id')
        .get(this.todoListController.getTaskListController)
        .delete(this.todoListController.deleteTaskListController);
    }
}


export default TodoListRouter;