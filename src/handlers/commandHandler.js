const commandHandler = function (inputArray) {
    let errorMessage;

    const [command, key, ...values] = inputArray;

    // Check if Command, key and values are valid. If not return error message.
    if (!command) {
        errorMessage = ERROR_COMMAND_INVALID;
    } else if (!key) {
        errorMessage = ERROR_KEY_INVALID;
    } else if (!values || values.length === 0) {
        errorMessage = ERROR_VALUE_INVALID;
    }

    switch (command) {
        case SET_COMMAND:
            break;

        default: return errorMsg = ERROR_COMMAND_NOTFOUND;
    }
}
