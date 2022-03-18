const rpopCommandUseCase = key => {
    const value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: ERROR_KEY_NOTFOUND,
            data: null
        };
    }


    if (Array.isArray(value)) {
        // remove last item of list and then put new list to repository
        // return last item of list
        const list = value.slice(0, -1);
        repository.put(key, list);
        return {
            errorMessage: null,
            data: value[value.length - 1]
        }
    } else {
        return {
            errorMessage: ERROR_NOT_A_LIST,
            data: null
        };
    }
}

export default rpopCommandUseCase;