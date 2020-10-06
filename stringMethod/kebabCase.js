const kebabCase =(str) =>{
    if(str==undefined){
        return undefined
    }
    
    
    return str .replace(/([a-z])([A-Z])/g, '$1-$2')   
    .replace(/[\s_]+/g, '-')                
    .toLowerCase() 
   
}
module.exports = kebabCase;