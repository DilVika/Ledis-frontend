import repository from "../../repositories/repository";
import { isKeyNotFound, converter } from "../../utils";
import * as constants from "../../utils/constants";

// Return a array of all members of set
const smemberCommandUseCase = (key) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        // Create a list if not exist.
        value = [];
    }

    if (Array.isArray(value) && typeof value !== "string" && value.length === converter.convertListToSet(value).size) {
        value = converter.convertListToSet(value);
        return {
            errorMessage: null,
            data: Array.from(value).join(" "),
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default smemberCommandUseCase;