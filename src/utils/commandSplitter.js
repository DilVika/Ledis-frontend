function commandSplitter(inputStr) {

    const regrex = /\s+/g;
    const defaultSpace = ' ';

    return inputStr.replace(regrex, defaultSpace).trim().split(defaultSpace);
}

export default commandSplitter;