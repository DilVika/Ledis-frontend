const convertSetToList = (set) => {
  const list = [];
  for (const key of set.keys()) {
    list.push(key);
  }
  return list;
}

const convertListToSet = (list) => {
  const set = new Set();
  for (const key of list) {
    set.add(key);
  }
  return set;
}


const converter =  (function () {
    return {
        convertSetToList,
        convertListToSet,
    };
})();

export default converter;