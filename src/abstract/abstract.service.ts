import Models from "../models/rootModels";
import ResMsg from "../utils/miscellaneous/responseMessage";
import Schema from "../utils/miscellaneous/schema";
import StatusCode from "../utils/miscellaneous/statusCode";

abstract class AbstractServices {
    protected ResMsg = ResMsg;
    protected StatusCode = StatusCode;
    protected Model = new Models();
    protected schema = new Schema();
}

export default AbstractServices;