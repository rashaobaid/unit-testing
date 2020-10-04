
function map ( array , fn){
    const newArr = [];
    for(let item of array){
        newArr.push(fn(item));
    }
    return newArr;
}
module.exports = map