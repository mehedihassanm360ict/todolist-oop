import { NextFunction, Request, Response } from "express";
import CustomError from "../../../utils/lib/customError";
import ValidationError from "../../../utils/lib/validationError";

interface IcustomError {
  success: boolean;
  message: string;
  status?: number;
}


class ErrorHandler {
    private customError: IcustomError;

    constructor(){
        this.customError = {
            success: false,
            message: "Something went wrong :( please try again later!!",
        }
    }

    public handleErrors = async(err: Error | CustomError,req: Request,res: Response,_next: NextFunction) => {
        // console.log({ err });
        if (err instanceof CustomError) {
            this.customError.message = err.message || "Something went wrong, please try again later!";
            this.customError.status = err.status;
        } else {
            this.customError.message = "Something went wrong, please try again later!";
        }

        res.status(this.customError.status || 500).json(this.customError);
    }
}

export default ErrorHandler;