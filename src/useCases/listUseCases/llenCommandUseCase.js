/**
 * Get a value of a key in a map as well as result from calling @function repository.get() with the key.
 * If the value is an array of string then @return {number} the length of the array.
 * If key is not found then @return {string} the message that key is not found.
 */

const llenCommandUseCase = key => {

    const value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: ERROR_KEY_NOTFOUND,
            data: null
        };
    }


    if (Array.isArray(value)) {
        return {
            errorMessage: null,
            data: value.length,
        }
    } else {
        return {
            errorMessage: ERROR_NOT_A_LIST,
            data: null
        }
    }
}

export default llenCommandUseCase;