import repository from "../../repositories/repository";
import isKeyNotFound from "../../utils/validator";
// A use case that delete a key. 
// Return length of keys that deleted.
const delCommandUseCase = (key) => {
    let value = repository.get(key);
    if (isKeyNotFound(value)) {
        return {
            errorMessage: null,
            data: 0,
        };
    } else {
        repository.clear(key);
        return {
            errorMessage: null,
            data: 1,
        };
    }
}

export default delCommandUseCase;