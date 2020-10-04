function keys(objOrArray){
    const result = [];
    for(let key in objOrArray){
        result.push(key);
    }
    //fix Sorting
    return result.sort();
}

module.exports = keys