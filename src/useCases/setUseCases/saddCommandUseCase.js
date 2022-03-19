import repository from "../../repositories/repository";
import { isKeyNotFound, converter } from "../../utils";
import * as constants from "../../utils/constants";

const saddCommandUseCase = (key, list) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        // Create a list if not exist.
        value = [];
    }

    if (!Array.isArray(list)) {
        list = [list];
    }


    if (Array.isArray(value) && typeof value !== "string" && value.length === converter.convertListToSet(value).size) {
        value = converter.convertListToSet(value);

        // Add list to set.
        list.forEach(item => value.add(item))

        // Change value to list to save to repository.
        value = converter.convertSetToList(value);
        repository.put(key, value);
        return {
            errorMessage: null,
            data: value.length,
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default saddCommandUseCase;