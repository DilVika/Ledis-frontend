const lrangeCommandUseCase = (key, [start, stop]) => {
    // return a range of element from the list stored at key.
    // start and stop are zero-based indexes, with 0 being the first element of the list (the head), 1 the next element and so on.
    // These indexes can not be negative.

    const value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: ERROR_KEY_NOTFOUND,
            data: null
        };
    }

    if (Array.isArray(value)) {
        const list = value.slice(start, stop);
        return {
            errorMessage: null,
            data: list
        };
    } else {
        return {
            errorMessage: ERROR_NOT_A_LIST,
            data: null
        };
    }

}

export default lrangeCommandUseCase;