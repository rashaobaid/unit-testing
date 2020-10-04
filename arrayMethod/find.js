function find ( array , x){
    let value= null
    for(let item of array){
       if(item>x){
        value=item;
        break;
       }
        
    }
    return value;
}
module.exports = find;