function findIndex ( array , x){
    let value= null
    for(let item in array){
       if(array[item]>x){
        value=item;
        break;
       }
    }
    return value;
}
module.exports =  findIndex;