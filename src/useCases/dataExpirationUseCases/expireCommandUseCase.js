import repository from "../../repositories/repository";

import * as constants from "../../utils/constants";
import isKeyNotFound from "../../utils/validator";

// Set timeout on a key, second is a positive integer (by default, a key has no expire time).
// Return the number of seconds the key has been set to expire.

const expireCommandUseCase = (key, seconds) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        return {
            errorMessage: constants.ERROR_KEY_NOTFOUND,
            data: null
        };
    }

   // Set timeout to value of key. 
   value.expiredIn = seconds;
   return {
       errorMessage: null,
       data: seconds,
   }
}

export default expireCommandUseCase;