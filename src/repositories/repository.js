import * as constants from '../utils/constants';

const repository =  (function () {
    let data = {};

    return {
        // If the key is not in data then return null. Otherwise return the value of the key. 
        put: (key, val) => data[key] = val,
        get: (key) => (key in data) ? data[key] : null,
        clear: (key) => delete data[key],

        save: () => localStorage.setItem(constants.snapshotKey, JSON.stringify(data)),
        load: () => data = JSON.parse(localStorage.getItem(constants.snapshotKey)),

        keys: () => Object.keys(data),
    }
})();


export default repository;