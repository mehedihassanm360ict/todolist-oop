import Joi from "joi";

class CommonValidator {
    public singleParamValidator = (idFieldName: string = 'id') => {
        const schemaObject: any = {};
        schemaObject[idFieldName] = Joi.number().required();

        return Joi.object(schemaObject);
    }
}

export default CommonValidator;