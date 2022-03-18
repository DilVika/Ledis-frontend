const snapshotKey = 'Ledis-snapshot';

// Commands 
// String
const SET_COMMAND = 'SET';
const GET_COMMAND = 'GET';

// List
const LLEN_COMMAND = 'LLEN';
const RPUSH_COMMAND = 'RPUSH';
const LPOP_COMMAND = 'LPOP';
const RPOP_COMMAND = 'RPOP';
const LRANGE_COMMAND = 'LRANGE';

// Set
const SADD_COMMAND = 'SADD';
const SREM_COMMAND = 'SREM';
const SMEMBERS_COMMAND = 'SMEMBERS';
const SINTER_COMMAND = 'SINTER';

// Data Expiration
const KEYS_COMMAND = 'KEYS';
const DEL_COMMAND = 'DEL';
const EXPIRE_COMMAND = 'EXPIRE';
const TTL_COMMAND = 'TTL';

const SAVE_COMMAND = 'SAVE';
const RESTORE_COMMAND = 'RESTORE';

// Error String
const ERROR_PREFIX = 'ERROR: ';
const ERROR_KEY_NOTFOUND = 'Key not found';
const ERROR_KEY_INVALID = 'Invalid Key';
const ERROR_COMMAND_NOTFOUND = 'Command not found';
const ERROR_COMMAND_INVALID = 'Invalid Command';
const ERROR_VALUE_INVALID = 'Invalid Value';

// List Error
const ERROR_NOT_A_LIST = 'Not a list';
// Set Error
const ERROR_NOT_A_SET = 'Not a set';
// Sucess String
const OK = 'OK';