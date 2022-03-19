import repository from "../../repositories/repository";

import * as constants from "../../utils/constants";
import isKeyNotFound from "../../utils/validator";


const lrangeCommandUseCase = (key, [start, stop]) => {
    // return a range of element from the list stored at key.
    // start and stop are zero-based indexes, with 0 being the first element of the list (the head), 1 the next element and so on.
    // These indexes can not be negative.

    const value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: constants.ERROR_KEY_NOTFOUND,
            data: null
        };
    }

    if (Array.isArray(value) && typeof value !== "string") {
        const list = value.slice(start, stop + 1);
        return {
            errorMessage: null,
            data: list.join(" "),
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_LIST,
            data: null
        };
    }

}

export default lrangeCommandUseCase;