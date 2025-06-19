import CommonValidator from "../common/validators";
import Wrapper from "../common/middleware/asyncWrapper";
import StatusCode from "../utils/miscellaneous/statusCode";
import CustomError from "../utils/lib/customError";
import ResMsg from "../utils/miscellaneous/responseMessage";

abstract class AbstractController {
    protected asyncWrapper:Wrapper;
    protected CommonValidator;

    constructor(){
        this.asyncWrapper = new Wrapper();
        this.CommonValidator = new CommonValidator();
    }

    protected StatusCode = StatusCode;

    protected error(message?:string, status?:number){
        throw new CustomError(
            message || ResMsg.HTTP_INTERNAL_SERVER_ERROR,
            status || StatusCode.HTTP_INTERNAL_SERVER_ERROR
        )
    }

}

export default AbstractController;