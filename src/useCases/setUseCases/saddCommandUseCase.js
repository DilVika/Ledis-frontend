import converter from "../../utils/converter";

const saddCommandUseCase = (key, list) => {
    let value = repository.get(key);

    if (isKeyNotFound(value)) {
        // Create a list if not exist.
        value = [];
    }


    if (Array.isArray(value) &&  value.length  === converter.convertListToSet(value).size) {
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
            errorMessage: ERROR_NOT_A_SET,
            data: null
        };
    }
}

export default saddCommandUseCase;