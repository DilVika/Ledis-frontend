export const snapshotKey = 'Ledis-snapshot';

export const title = 'Ledis-CLI';

// Commands 
// String
export const SET_COMMAND = 'SET';
export const GET_COMMAND = 'GET';

// List
export const LLEN_COMMAND = 'LLEN';
export const RPUSH_COMMAND = 'RPUSH';
export const LPOP_COMMAND = 'LPOP';
export const RPOP_COMMAND = 'RPOP';
export const LRANGE_COMMAND = 'LRANGE';

// Set
export const SADD_COMMAND = 'SADD';
export const SREM_COMMAND = 'SREM';
export const SMEMBERS_COMMAND = 'SMEMBERS';
export const SINTER_COMMAND = 'SINTER';

// Data Expiration
export const KEYS_COMMAND = 'KEYS';
export const DEL_COMMAND = 'DEL';
export const EXPIRE_COMMAND = 'EXPIRE';
export const TTL_COMMAND = 'TTL';

export const SAVE_COMMAND = 'SAVE';
export const RESTORE_COMMAND = 'RESTORE';

// Error String
export const ERROR_PREFIX = 'ERROR: ';
export const ERROR_KEY_NOTFOUND = 'Key not found';
export const ERROR_KEY_INVALID = 'Invalid Key';
export const ERROR_COMMAND_NOTFOUND = 'Command not found';
export const ERROR_COMMAND_INVALID = 'Invalid Command';
export const ERROR_VALUE_INVALID = 'Invalid Value';

// List Error
export const ERROR_NOT_A_LIST = 'Not a list';
// Set Error
export const ERROR_NOT_A_SET = 'Not a set';
// Data Expiration Error
export const ERROR_NO_TIMEOUT = 'No timeout';
// Sucess String
export const OK = 'OK';

export const inputSign = '❯';