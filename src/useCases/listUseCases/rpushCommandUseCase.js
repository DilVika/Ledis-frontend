import repository from "../../repositories/repository";

import * as constants from "../../utils/constants";
import isKeyNotFound from "../../utils/validator";

/**
 * Get value of key using @function repository.get() with the key and check if value is an array of string.
 * If the value is an array of string then append @param {Array} of string to list and call @function repository.put() with the key and list.
 * Return length of list after appending successfully.
 * If key is not found then @return {string} the message that key is not found.
 */

const rpushCommandUseCase = (key, list) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        // Create a list if not exist.
        value = [];
    }
    

    if (Array.isArray(value) && typeof value !== "string") {
        value.push(...list);
        repository.put(key, value);
        return {
            errorMessage: null,
            data: value.length,
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_LIST,
            data: null
        };
    }

}

export default rpushCommandUseCase;;