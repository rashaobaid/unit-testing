function removeDuplicate ( array ){
    const  newArr= [...new Set(array)];
    return newArr;
}

module.exports = removeDuplicate