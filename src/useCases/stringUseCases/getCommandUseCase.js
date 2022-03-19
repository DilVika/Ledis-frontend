import repository from "../../repositories/repository";

import * as constants from "../../utils/constants";
import isKeyNotFound from "../../utils/validator";

const getCommandUseCase = (key) => {
    let result;

    result = repository.get(key);
    console.log('Get Command Use Case');
    console.log(key);
    console.log(result);
    if (isKeyNotFound(result)) {
        return {
            errorMessage: constants.ERROR_KEY_NOTFOUND,
            data: result
        }
    } else {
        return {
            errorMessage: null,
            data: result
        }
    }
}

export default getCommandUseCase;