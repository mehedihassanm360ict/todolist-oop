import Joi from "joi";

class TodoListValidator {
    public createTodoListValidator = Joi.object({
        title: Joi.string().required().messages({
            'string.empty': 'Title cannot be empty',
            'any.required': 'title is required'
        }),
    })
}

export default TodoListValidator;