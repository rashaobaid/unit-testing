function some ( array , x){
    for(let item of array){
       if(item>x)
       return true;
       
    }
    return false;
}
module.exports = some