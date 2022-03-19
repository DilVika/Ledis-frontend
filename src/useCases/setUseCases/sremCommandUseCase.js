// Remove members from a set
// Receive key and list members to remove from set.
// Get a set from repository by check if is an array and convert to set.
import repository from "../../repositories/repository";
import { isKeyNotFound, converter } from "../../utils";
import * as constants from "../../utils/constants";
const sremCommandUseCase = (key, list) => {
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

        // Remove list from set and count the number of removed items.
        let count = 0;
        list.forEach(item => {
            if (value.has(item)) {
                value.delete(item);
                count++;
            }
        });

        // Change value to list to save to repository.
        value = converter.convertSetToList(value);
        repository.put(key, value);
        return {
            errorMessage: null,
            data: count,
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default sremCommandUseCase;