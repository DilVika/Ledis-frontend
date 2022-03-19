/**
 * Do save snapshot to localStorage by calling @function repository.save() and catch the error (if any).
 * If there is no error then @return {string} the success message @string OK.
 * If there is error then @return {const string} the error message. @string error.message.
 */
import repository from "../../repositories/repository";
import * as constants from "../../utils/constants";
const saveCommandUseCase = () => {
    try {
        repository.save();
        return {
            errorMessage: null,
            data: constants.OK
        }
    } catch (error) {
        return {
            errorMessage: error.message,
            data: null,}
    }
}

export default saveCommandUseCase;