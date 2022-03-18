// Validate a value if null or undefined then return true.
const  isKeyNotFound = (queryResult) => {
    if (queryResult === null || queryResult === undefined) {
        return true;
    }
    
    return false;
}