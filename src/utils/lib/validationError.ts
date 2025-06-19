import StatusCode from "../miscellaneous/statusCode";
interface INewValidation extends ValidationError {
    path: string;
    msg: string;
}

interface IError {
    status: number;
    type: string;
}

class ValidationError extends Error implements IError {
    status: number;
    type: string;
    errors: Array<{ path: string; msg: string }>; // Add this to store all validation errors

    constructor(error: any) {
        super(error.array()[0].msg);
        this.status = StatusCode.HTTP_UNPROCESSABLE_ENTITY;
        this.type = "Validation Error";
        this.errors = error.array().map((err: any) => ({
            path: err.path,
            msg: err.msg
        }));
    }
}

export default ValidationError;