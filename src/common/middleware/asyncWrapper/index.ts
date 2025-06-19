import { NextFunction, Request, Response } from "express";
import Joi from "joi";

type Func = (req: Request, res: Response, next: NextFunction) => Promise<void>;

type Validators = {
  bodySchema?: Joi.ObjectSchema<any>;
  paramSchema?: Joi.ObjectSchema<any>;
  querySchema?: Joi.ObjectSchema<any>;
};

class Wrapper {
    public wrap(schema: Validators | null, cb: Func){
        return async(req: Request, res: Response, next: NextFunction) => {
            try{
                const {params, query, body} = req;
                if(schema){
                    if(schema.bodySchema){
                        const validateBody = await schema.bodySchema.validateAsync(body);
                        req.body = validateBody;
                    }

                    if(schema.paramSchema){
                        const validateParams = await schema.paramSchema.validateAsync(params);
                        req.params = validateParams;
                    }

                    if(schema.querySchema){
                        const validateQuery = await schema.querySchema.validateAsync(query);
                        req.query = validateQuery;
                    }
                }

                await cb(req, res, next);
            } catch(error: any){    
                console.log({error});
            }
        }
    }
}

export default Wrapper;