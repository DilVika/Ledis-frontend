import repository from "../../repositories/repository";
import * as constants from "../../utils/constants";
/**
 * Do load snapshot to localStorage by calling @function repository.load() and catch the error (if any).
 * If there is no error then @return {object} that return from load function.
 * If there is error then @return {const string} the error message. @string error.message.
 */
const restoreCommandUseCase = () => {
    try {
        repository.load();
        return {
            errorMessage: null,
            data: constants.OK
        }
    } catch (error) {
        return   {
            errorMessage: error.errorMessage,
            data: null
        }
    }
}

export default restoreCommandUseCase;