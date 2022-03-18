// Recieves a array of string then call services to execute the command and return the object result with errorMessage and data.

import repository from "../../repositories/repository";

const setCommandUseCase = (key, value) => {

    let result;


    result = repository.put(key, value);
    if (result) {
        return {
            errorMessage: null,
            data: OK
        }
    }
}

export default setCommandUseCase;