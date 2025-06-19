import Joi from "joi";

class TodoListValidator {
    public createTodoListValidator = Joi.object({
        title: Joi.string().required(),
    })
}

export default TodoListValidator;