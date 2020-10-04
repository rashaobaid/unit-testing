
function filter ( array ,x){
    const newArr = [];
    for(let item of array){
         if(item > x)
        newArr.push((item));
    }
    return newArr;
}
module.exports = filter;