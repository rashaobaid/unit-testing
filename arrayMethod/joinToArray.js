function joinToArray ( array , x){
    const newArr = [];
    newArr.push(array[0]);
    for(let item=1 ;item<array.length;item++){
        newArr.push(x);
        newArr.push(array[item]);
    }
    return newArr ;
}
module.exports =  joinToArray;