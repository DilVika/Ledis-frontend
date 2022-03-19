// import all the use cases
import {
    setCommandUseCase, getCommandUseCase, llenCommandUseCase, rpushCommandUseCase,
    lpopCommandUseCase, rpopCommandUseCase, lrangeCommandUseCase, saddCommandUseCase,
    sremCommandUseCase, smembersCommandUseCase, sinterCommandUseCase, keysCommandUseCase, 
    delCommandUseCase, expireCommandUseCase, ttlCommandUseCase, saveCommandUseCase, restoreCommandUseCase
} from '../useCases/index';
// import all constants as *
import * as constants from '../utils/constants';


const commandHandler = function (inputArray) {
    let resultObject = {
        errorMessage: null,
        data: null
    }

    const [rawcommand, rawKey, ...rest] = inputArray;
    const command = rawcommand?.toUpperCase();
    const key = rawKey?.toLowerCase();
    const values = rest.length > 1 ? rest : rest[0];

    // Check if Command, key and values are valid. If not return error message.
    if (!command) {
        resultObject.errorMessage = constants.ERROR_COMMAND_INVALID;
    } else if (!key) {
        resultObject.errorMessage =  constants.ERROR_KEY_INVALID;
    } else if (!values || values.length === 0) {
        resultObject.errorMessage = constants.ERROR_VALUE_INVALID;
    }

    switch (command) {
        case constants.SET_COMMAND:
            resultObject = setCommandUseCase(key, values);
            break;
        case constants.GET_COMMAND:
            resultObject = getCommandUseCase(key);
            break;
        case constants.LLEN_COMMAND:
            resultObject = llenCommandUseCase(key);
            break;
        case constants.RPUSH_COMMAND:
            resultObject = rpushCommandUseCase(key, values);
            break;
        case constants.LPOP_COMMAND:
            resultObject = lpopCommandUseCase(key);
            break;
        case constants.RPOP_COMMAND:
            resultObject = rpopCommandUseCase(key);
            break;
        case constants.LRANGE_COMMAND:
            resultObject = lrangeCommandUseCase(key, values);
            break;
        case constants.SADD_COMMAND:
            resultObject = saddCommandUseCase(key, values);
            break;
        case constants.SREM_COMMAND:
            resultObject = sremCommandUseCase(key, values);
            break;
        case constants.SMEMBERS_COMMAND:
            resultObject = smembersCommandUseCase(key);
            break;
        case constants.SINTER_COMMAND:
            resultObject = sinterCommandUseCase(key, values);
            break;
        case constants.KEYS_COMMAND:
            resultObject = keysCommandUseCase(key);
            break;
        case constants.DEL_COMMAND:
            resultObject = delCommandUseCase(key);
            break;
        case constants.EXPIRE_COMMAND:
            resultObject = expireCommandUseCase(key, values);
            break;
        case constants.TTL_COMMAND:
            resultObject = ttlCommandUseCase(key);
            break;
        case constants.SAVE_COMMAND:
            resultObject = saveCommandUseCase();
            break;
        case constants.RESTORE_COMMAND:
            resultObject = restoreCommandUseCase();
            break;

        default: resultObject.errorMessage =  constants.ERROR_COMMAND_NOTFOUND
    }

    if (resultObject.errorMessage) {
        resultObject.errorMessage = constants.ERROR_PREFIX + resultObject.errorMessage;
    }

    if (resultObject.data != null) {
        resultObject.data = `${resultObject.data}`;
    }


    return resultObject;
}

export default commandHandler;