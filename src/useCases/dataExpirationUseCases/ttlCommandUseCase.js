import repository from "../../repositories/repository";

import * as constants from "../../utils/constants";
import isKeyNotFound from "../../utils/validator";
// Get timeout on a key, second is a positive integer (by default, a key has no expire time).
// Return error message if there is no timeout on the key.

const ttlCommandUseCase = (key) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: constants.ERROR_KEY_NOTFOUND,
            data: null
        };
    }

    if (value.expiredIn === undefined || value.expiredIn === null) {
        return {
            errorMessage: constants.ERROR_NO_TIMEOUT,
            data: null
        };
    }

    return {
        errorMessage: null,
        data: value.expiredIn,
    }
}

export default ttlCommandUseCase;