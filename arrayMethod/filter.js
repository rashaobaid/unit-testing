
function filter ( array ,fn){
    let newArr = [];
    if( array == null || array.length == 0 ||fn == undefined){
        return [];
    }
    else{
       
            for(let item of array){
                if(fn(item))
               newArr.push((item));
           }
        }
       
    return newArr;
}
module.exports = filter;

