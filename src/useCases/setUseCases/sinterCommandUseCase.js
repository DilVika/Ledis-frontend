import repository from "../../repositories/repository";
import { isKeyNotFound, converter } from "../../utils";
import * as constants from "../../utils/constants";

//  Set intersection among all set stored in specified keys. Return array of members of the result set
const sinterCommandUseCase = (firstKey, ...other) => {   
    const keys = [firstKey.concat(...other)];
    let sets = [];

    keys.forEach(key => {
        let value = repository.get(key);
        if (isKeyNotFound(value)) {
            // Create a list if not exist.
            value = [];
        }
        if (Array.isArray(value) && typeof value !== "string" && value.length === converter.convertListToSet(value).size) {
            value = converter.convertListToSet(value);
            sets.push(value);
        }
    });
    
    if (sets.length > 0) {
        // Intersect all sets.
        let result = new Set(sets[0]);
        for (let i = 1; i < sets.length; i++) {
            result = new Set([...result].filter(x => sets[i].has(x)));
        }
        return {
            errorMessage: null,
            data: Array.from(result),
        };
    } else {
        return {
            errorMessage: constants.ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default sinterCommandUseCase;