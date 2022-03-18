/**
 * Get value of key using @function repository.get() with the key and check if value is an array of string.
 * If the value is an array of string then remove and return first item of list by remove first item of array and apply chang with @function repository.put() with the key and new list.
 * Return length of list after appending successfully.
 * If key is not found then @return {string} the message that key is not found.
 */

const lpopCommandUseCase = key => {
    const value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: ERROR_KEY_NOTFOUND,
            data: null
        };
    }

    if (Array.isArray(value)) {
        const list = value.slice(1);
        repository.put(key, list);
        return {
            errorMessage: null,
            data: value[0]
        };
    } else {
        return {
            errorMessage: ERROR_NOT_A_LIST,
            data: null
        };
    }


}

export default lpopCommandUseCase;