function every ( array , x){
    let value = false
    for(let item of array){
       if(item>x){
        value=true;
       }
        else{
            value =false;
            break;
        }
    }
    return value;
}
module.exports = every;