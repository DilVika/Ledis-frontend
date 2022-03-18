// Return a array of all members of set
const smemberCommandUseCase = (key) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        // Create a list if not exist.
        value = [];
    }

    if (Array.isArray(value) && value.length === converter.convertListToSet(value).size) {
        value = converter.convertListToSet(value);
        return {
            errorMessage: null,
            data: Array.from(value),
        };
    } else {
        return {
            errorMessage: ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default smemberCommandUseCase;