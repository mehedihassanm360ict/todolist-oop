import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../../../utils/miscellaneous/statusCode";
import CustomError from "../../../utils/lib/customError";

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
                 if (error.isJoi) {
          res.status(StatusCode.HTTP_BAD_REQUEST).json({
            success: false,
            message: error.message,
          });
        } else {
          next(new CustomError(error.message, error.status));
        }
            }
        }
    }
}

export default Wrapper;