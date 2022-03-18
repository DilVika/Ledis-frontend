
const getCommandUseCase = (key) => {
    let result;

    result = repository.get(key);
    if (isKeyNotFound(result)) {
        return {
            errorMessage: null,
            data: result
        }
    } else {
        return {
            errorMessage: ERROR_KEY_NOTFOUND,
            data: null
        }
    }
}

export default getCommandUseCase;